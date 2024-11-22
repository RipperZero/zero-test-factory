class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }

  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

const targetMap = new WeakMap();

const getDepend = (target, key) => {
  let map = targetMap.get(target);

  if (!map) {
    map = new Map();
    targetMap(target, map);
  }

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
};

// const depend = new Depend();

// const watchFn = (fn) => {
//   depend.addDepend(fn);
// };

const obj = {
  name: "coderwhy",
  age: 18,
};

const objProxy = new Proxy(obj, {
  get: (target, key, receiver) => {
    return Reflect.get(target, key, receiver);
  },
  set: (target, key, newValue, receiver) => {
    Reflect.set(target, key, newValue, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  },
});

const foo = () => {
  const newName = obj.name;
  console.log("响应式数据：", newName);
};

// watchFn(foo);

objProxy.name = "123";
objProxy.name = "456";
objProxy.name = "789";
objProxy.age = 666;
