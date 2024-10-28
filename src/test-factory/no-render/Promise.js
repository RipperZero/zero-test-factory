// @see https://juejin.cn/post/7426319570813075475
// TODO https://juejin.cn/post/7426319570813075475#heading-4
// → 在执行then方法的同时，对获取的值进行包裹一层我们自己的Promise

// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    // 声明两个用于接收异步信息的变量
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      // 只有处于初始状态才能执行，状态已发生变化则锁死不执行
      if (this.status === PROMISE_STATUS_PENDING) {
        // // 改变状态：fulfilled
        // this.status = PROMISE_STATUS_FULFILLED;
        // // fulfilled状态，赋值对应异步信息
        // this.value = value;
        // console.log("resolve被调用");
        // // then方法接收resolve状态传递的信息
        // // this.onFulfilled(this.value);
        // // setTimeout(() => this.onFulfilled(value), 0);
        // // 微任务执行该onFulfilled回调，晚于then方法执行
        // // queueMicrotask(() => this.onFulfilled(value));
        // // 对累积的then调用兑现状态函数进行遍历分别调用
        // queueMicrotask(() => {
        //   this.onFulfilledFns.forEach((fn) => fn(this.value));
        // });

        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) {
            return;
          }

          // 该状态改变需要放入微任务内，在执行完then方法中的pending逻辑代码后再锁定状态
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => {
            fn(this.value);
          });
        });
      }
    };

    const reject = (reason) => {
      // 只有处于初始状态才能执行，状态已发生变化则锁死不执行
      if (this.status === PROMISE_STATUS_PENDING) {
        // // 改变状态：rejected
        // this.status = PROMISE_STATUS_REJECTED;
        // // rejected状态，赋值对应拒绝信息
        // this.reason = reason;
        // console.log("reject被调用");
        // // then方法接收reject状态传递的信息
        // // this.onRejected(this.reason);
        // // setTimeout(() => this.onRejected(reason), 0);
        // // queueMicrotask(() => this.onRejected(reason));
        // // 对累积的then调用拒绝状态函数进行遍历分别调用
        // queueMicrotask(() => {
        //   this.onRejectedFns.forEach((fn) => fn(this.reason));
        // });

        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) {
            return;
          }

          // 该状态改变需要放入微任务内，在执行完then方法中的pending逻辑代码后再锁定状态
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason);
          });
        });
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    // this.onFulfilled = onFulfilled;
    // this.onRejected = onRejected;

    // 1.如果在then调用的时候, 状态已经确定下来
    if (this.status === PROMISE_STATUS_FULFILLED && !!onFulfilled) {
      onFulfilled(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED && !!onRejected) {
      onRejected(this.reason);
    }

    // 2.将成功回调和失败的回调放到数组中
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled);
      this.onRejectedFns.push(onRejected);
    }
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  console.log(123456);
  resolve("resolve value");
  reject("reject reason");
});

myPromise.then(
  (value) => console.log("1", value),
  (reason) => console.log("1", reason),
);
myPromise.then(
  (value) => console.log("2", value),
  (reason) => console.log("2", reason),
);
