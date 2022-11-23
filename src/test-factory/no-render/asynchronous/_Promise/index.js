// @see https://www.jianshu.com/p/818bfe22eefd

const STATUS = {
  PENDING: "PENDING",
  FUFILLED: "FUFILLED",
  REJECTED: "REJECTED",
};

function resolvePromise(x, newPromise, resolve, reject) {
  // 规范 2.3.1
  // 防止自己等待自己完成
  if (newPromise === x) {
    return reject(new TypeError("出错了"));
  }

  // 规范 2.3.3
  // x可以是一个对象 或者是函数
  if ((x && typeof x === "object") || typeof x === "function") {
    let called;

    try {
      // 规范 2.3.3.1
      let then = x.then;

      if (typeof then === "function") {
        // 2.3.3.3
        then.call(
          x,
          function (y) {
            // 规范 2.3.3.3.3
            if (called) return;
            called = true;
            // 规范 2.3.3.3.1
            resolvePromise(y, newPromise, resolve, reject);
          },
          function (r) {
            // 规范 2.3.3.3.3
            if (called) return;
            called = true;
            // 规范 2.3.3.3.2
            reject(r);
          },
        );
      } else {
        // 此时x 就是一个普通对象
        resolve(x);
      }
    } catch (e) {
      // 规范 2.3.3.3.4.1
      if (called) return;
      called = true;
      // 规范 2.3.3.3.4
      // 取then时抛出错误了
      reject(e);
    }
  } else {
    // x是一个原始数据类型 不是promise
    resolve(x);
  }

  // 不是proimise 直接就调用resolve
}

class _Promise {
  constructor(executor) {
    this.status = STATUS.PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 存放成功回调
    this.onResolvedCallbacks = [];
    // 存放失败回调
    this.onRejectedCallbacks = [];

    const resolve = (val) => {
      if (val instanceof _Promise) {
        return val.then(resolve, reject);
      }

      if (this.status === STATUS.PENDING) {
        this.status = STATUS.FUFILLED;
        this.value = val;
        // 发布
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.status === STATUS.PENDING) {
        this.status = STATUS.REJECTED;
        this.reason = reason;
        // 发布
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      // 出错走失败逻辑
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // switch作用域

    // 可选参数
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (x) => x;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (error) => {
            throw error;
          };

    let newPromise = new _Promise((resolve, reject) => {
      if (this.status === STATUS.FUFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(x, newPromise, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === STATUS.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(x, newPromise, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === STATUS.PENDING) {
        // 装饰模式 切片编程
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(x, newPromise, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(x, newPromise, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return newPromise;
  }
}
