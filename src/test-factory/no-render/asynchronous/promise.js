// --------------------------------------------------------
// then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出
// const timeout = (ms) => {
//   return new Promise((resolve, reject) => {
//     console.log("Promise");
//     // setTimeout(resolve, ms, "done");
//     resolve("test");
//   });
// };

// timeout(1000).then(
//   (value) => {
//     console.log(value);
//   },
//   () => {
//     console.log("fail");
//   },
// );

// console.log("湖人总冠军");
// --------------------------------------------------------

// --------------------------------------------------------
// Ajax
// const getJSON = (url) => {
//   const promise = new Promise((resolve, reject) => {
//     const handler = function () {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };

//     // 需要运行环境(上下文 → 控制台)
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     // XMLHttpRequest.onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();
//   });

//   return promise;
// };

// getJSON("http://localhost:8090/zero")
//   .then(
//     (json) => {
//       console.log(json);
//     },
//     (error) => {
//       console.log(error);
//     },
//   )
//   .catch();
// --------------------------------------------------------

// --------------------------------------------------------
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("fail"));
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(p1), 1000);
// });

// p2.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });
// --------------------------------------------------------

// --------------------------------------------------------
// 调用resolve或reject并不会终结 Promise 的参数函数的执行。
// 上面代码中，调用resolve(1)以后，后面的console.log(2)还是会执行，并且会首先打印出来。
// 这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// }).then((r) => {
//   console.log(r);
// });
// --------------------------------------------------------

// --------------------------------------------------------
// const promise = new Promise((resolve, reject) => {
//   // resolve("666");
//   reject(new Error("fail"));
// });

// try {
//   promise.then(
//     (value) => {
//       console.log(value);
//     },
//     (error) => {
//       console.log(123);
//     },
//   );
// } catch (error) {
//   // 无效
//   // 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
//   console.log(error);
// }
// --------------------------------------------------------

// --------------------------------------------------------
// Generator 函数与 Promise 的结合
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     resolve("foo");
//   });
// };

// const g = function* () {
//   try {
//     const foo = yield getPromise();
//     console.log(foo);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const run = (generator) => {
//   const gen = generator();

//   const go = (result) => {
//     if (result.done) {
//       return result.value;
//     }

//     console.log(result.value);

//     return result.value.then(
//       (value) => {
//         return go(gen.next(value));
//       },
//       (error) => {
//         return go(gen.throw(error));
//       },
//     );
//   };

//   go(gen.next());
// };

// run(g);
// --------------------------------------------------------

// --------------------------------------------------------
// Promise.prototype.then()
// 调用resolve或reject并不会终结 Promise 的参数函数的执行。
// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
// 因此可以采用链式写法，即then方法后面再调用另一个then方法。
// new Promise((res, rej) => {
//   res();
// })
//   .then(() => {
//     console.log("---------1");
//     // 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
//     return 2;
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .then((value) => {
//     console.log(value);
//   });
// --------------------------------------------------------

// --------------------------------------------------------
// Promise.prototype.catch()
// 如果 Promise 状态已经变成resolved，再抛出错误是无效的。
// new Promise((res, rej) => {
//   res("ok");
//   throw new Error("test");
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// --------------------------------------------------------

// --------------------------------------------------------
// 跟传统的try/catch代码块不同的是，如果没有使用catch()方法指定错误处理的回调函数，
// Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。
// const someAsyncThing = () => {
//   return new Promise((res, rej) => {
//     // 下面一行会报错，因为x没有声明
//     res(x + 2);
//   });
// };

// someAsyncThing().then(() => {
//   console.log("everything is great");
// });

// setTimeout(() => {
//   console.log(123);
// }, 2000);
// --------------------------------------------------------

// --------------------------------------------------------
// Promise.prototype.finally()
// 实现
// Promise.prototype.finally = function (callback) {
//   let P = this.constructor;
//   return this.then(
//     (value) => P.resolve(callback()).then(() => value),
//     (reason) =>
//       P.resolve(callback()).then(() => {
//         throw reason;
//       }),
//   );
// };
// --------------------------------------------------------

// --------------------------------------------------------
// Promise.resolve()
// Promise.resolve("foo");
// // 等价于
// new Promise((resolve) => resolve("foo"));
// --------------------------------------------------------

const sleep = async () => {
  const wait = () =>
    new Promise((res, rej) => {
      res(666);
      //   setTimeout(res, 2000);
    });

  for (let index = 0; index < 10; index++) {
    const result = await wait().then((data) => {
      console.log(data);
      console.log(index);
    });

    console.log("result---" + result);
  }
};
sleep();
