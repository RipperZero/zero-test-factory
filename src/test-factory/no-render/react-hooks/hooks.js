let isMount = true;
let workInProgressHook = null;

const fiber = {
  stateNode: App,
  memorizedState: null,
};

function useState(initialState) {
  let hook;

  if (isMount) {
    hook = {
      memorizedState: initialState,
      next: null,
      queue: {
        pending: null,
      },
    };

    if (!fiber.memorizedState) {
      fiber.memorizedState = hook;
    } else {
      workInProgressHook.next = hook;
    }

    workInProgressHook = hook;
  } else {
    hook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;
  }

  let baseState = hook.memorizedState;

  if (hook.queue.pending) {
    let firstUpdate = hook.queue.pending.next;

    do {
      const action = firstUpdate.action;
      baseState = action(baseState);
      firstUpdate = firstUpdate.next;
    } while (firstUpdate !== hook.queue.pending.next);

    hook.queue.pending = null;
  }

  hook.memorizedState = baseState;
  return [baseState, dispatchAction.bind(null, hook.queue)];
}

function dispatchAction(queue, action) {
  const update = {
    action,
    next: null,
  };

  if (queue.pending === null) {
    // u0 -> u0 -> u0
    update.next = update;
  } else {
    // u0 -> u0
    // u1 -> u0 -> u1
    update.next = queue.pending.next;
    queue.pending.next = update;
  }

  queue.pending = update;

  schedule();
}

function schedule() {
  workInProgressHook = fiber.memorizedState;
  const app = fiber.stateNode();
  isMount = false;

  return app;
}

function App() {
  const [num, updateNum] = useState(0);
  const [num1, updateNum1] = useState(10);

  console.log("isMount", isMount);
  console.log("num", num);
  console.log("num1", num1);

  return {
    onClick() {
      updateNum((num) => num + 1);
    },
    onfocus() {
      updateNum1((num1) => num1 + 10);
    },
  };
}

window.app = schedule();
