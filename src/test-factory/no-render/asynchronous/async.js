// --------------------------------------------------------
// // const timeout = (ms) => {
// //   const promise = new Promise((resolve) => {
// //     setTimeout(resolve, ms);
// //   });
// //   return promise;
// // };
// // 由于async函数返回的是 Promise 对象，可以作为await命令的参数。
// // 所以，上面的例子也可以写成下面的形式。
// const timeout = async (ms) => {
//   await new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// };

// // async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，
// // 才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，
// // 才会执行then方法指定的回调函数。
// const asyncPrint = async (value, ms) => {
//   await timeout(ms).then(() => {
//     console.log("resolve");
//   });
//   console.log(value);
//   await timeout(ms * 2).then(() => {
//     console.log("resolve");
//   });
//   console.log(value);
//   await timeout(ms * 3).then(() => {
//     console.log("resolve");
//   });
//   console.log(value);
//   await timeout(ms * 4).then(() => {
//     console.log("resolve");
//   });
//   console.log(value);

//   // async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。
//   // 抛出的错误对象会被catch方法回调函数接收到。
//   //   throw new Error("Wrong");
//   // 函数f内部return命令返回的值，会被then方法回调函数接收到。
//   return "returnValue";
// };

// asyncPrint("hello world", 1000)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// --------------------------------------------------------

// --------------------------------------------------------
// class Sleep {
//   constructor(timeout) {
//     this.timeout = timeout;
//   }

//   then(resolve, reject) {
//     const startTime = Date.now();
//     setTimeout(() => {
//       resolve(Date.now() - startTime);
//     }, this.timeout);
//   }
// }

// // await命令后面是一个Sleep对象的实例
// // 这个实例不是 Promise 对象，但是因为定义了then方法，await会将其视为Promise处理
// (async () => {
//   console.log(await new Sleep(2000));
// })();
// --------------------------------------------------------

// --------------------------------------------------------
const sleep = (interval) => {
  return new Promise((resolve) => {
    setTimeout(resolve, interval);
  });
};

// 用法
const one2FiveInAsync = async () => {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    // await sleep(2000);
    await sleep(2000);
    // return "returnValue";
  }
};

one2FiveInAsync();
// --------------------------------------------------------
