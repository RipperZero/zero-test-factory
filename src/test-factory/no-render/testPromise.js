// const promiseA = new Promise((resolve, reject) => {
//   console.log("Promise");

//   resolve(() => {
//     console.log(`湖人总冠军!!!`);
//   });
// });

// const promiseB = new Promise((resolve, reject) => {
//   console.log("Promise");

//   resolve(() => {
//     console.log(`湖人总冠军`);
//   });
// });

// promiseA.then((value) => {
//   value();
// });

// // const all = Promise.all([promiseA,promiseB]);

// console.log("WDNMD!");

// const setDelay = (millisecond) => {
//   return new Promise((resolve, reject) => {
//     if (typeof millisecond != "number")
//       reject(new Error("参数必须是number类型"));
//     setTimeout(() => {
//       resolve(`我延迟了${millisecond}毫秒后输出的`);
//     }, millisecond);
//   });
// };

// setDelay(2000)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const setDelaySecond = (seconds) => {
//   return new Promise((resolve, reject) => {
//     if (typeof seconds != "number" || seconds > 10)
//       reject(new Error("参数必须是number类型，并且小于等于10"));
//     // setTimeout(() => {
//     //   console.log(
//     //     `先是setDelaySeconds函数输出，延迟了${seconds}秒，一共需要延迟${
//     //       seconds + 2
//     //     }秒`,
//     //   );
//     //   resolve(setDelay(2000)); // 这里依赖上一个Promise
//     setTimeout(() => {
//       resolve(`我延迟了${seconds}秒后输出的，是第二个函数`);
//     }, seconds * 1000);
//   });
// };

// setDelaySecond(3)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// setDelay(2000)
//   .then((firstResult) => {
//     console.log(`First Step`);
//     console.log(firstResult);
//     return setDelaySecond(3);
//   })
//   .then((SecondResult) => {
//     console.log(`Second Step`);
//     console.log(SecondResult);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// setDelay(5000)
//   .then((result) => {
//     console.log("第一步完成了");
//     console.log(result);
//     let message = "湖人总冠军";
//     return Promise.resolve(message); // 这里返回我想在下一阶段处理的值
//   })
//   .then((result) => {
//     console.log("第二步完成了");
//     console.log(result); // 这里拿到上一阶段的返回值
//     //return Promise.resolve('这里可以继续返回')
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const demo = async function () {
//   return Promise.resolve(`湖人总冠军`);
//   // 等同于 return '我是Promise'
//   // 等同于 return new Promise((resolve,reject)=>{ resolve('我是Promise') })
// };
// // demo.then((result: string) => {
// //   console.log(result); // 这里拿到返回值
// // });
// demo().then((result) => {
//   console.log(result);
// });

// const demo = async () => {
//   const result = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("我延迟了一秒");
//     }, 1000);
//   });
//   console.log("我由于上面的程序还没执行完，先不执行“等待一会”");
//   // return result;
// };
// // demo的返回当做Promise
// demo().then((result) => {
//   console.log("输出", result);
// });

// const demo = async () => {
//   const result = await setTimeout(() => {
//     console.log("我延迟了一秒");
//   }, 1000);
//   console.log("我由于上面的程序还没执行完，先不执行“等待一会”");
//   return result;
// };
// demo().then((result) => {
//   console.log("输出", result);
// });

// const demo = async () => {
//   const message = "我是声明值";
//   const result = await message;
//   console.log(result);
//   console.log("我由于上面的程序还没执行完，先不执行“等待一会”");
//   return result;
// };
// demo().then((result) => {
//   console.log("输出", result);
// });

// const setDelay = (millisecond) => {
//   return new Promise((resolve, reject) => {
//     if (typeof millisecond != "number")
//       reject(new Error("参数必须是number类型"));
//     setTimeout(() => {
//       resolve(`我延迟了${millisecond}毫秒后输出的`);
//     }, millisecond);
//   });
// };
// const setDelaySecond = (seconds) => {
//   return new Promise((resolve, reject) => {
//     if (typeof seconds != "number" || seconds > 10)
//       reject(new Error("参数必须是number类型，并且小于等于10"));
//     setTimeout(() => {
//       resolve(`我延迟了${seconds}秒后输出的，注意单位是秒`);
//     }, seconds * 1000);
//   });
// };

// setDelay(1000)
//   .then((firstResult) => {
//     console.log(firstResult);
//     return setDelaySecond(2);
//   })
//   .then((secondResult) => {
//     console.log(secondResult);
//     return setDelay(1000);
//   })
//   .then((thirdResult) => {
//     console.log(thirdResult);
//     console.log("Done");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const demo = async () => {
//   console.log(await setDelay(1000));
//   console.log(await setDelaySecond(2));
//   console.log(await setDelay(1000));
//   console.log(`Done`);
// };
// demo();

const setDelay = (millisecond) => {
  return new Promise((resolve, reject) => {
    if (typeof millisecond != "number")
      reject(new Error("参数必须是number类型"));
    setTimeout(() => {
      resolve(`我延迟了${millisecond}毫秒后输出的`);
    }, millisecond);
  });
};

// const arr = [setDelay, setDelay, setDelay];
// arr[0](1000)
//   .then((result) => {
//     console.log(result);
//     return arr[1](1000);
//   })
//   .then((result) => {
//     console.log(result);
//     return arr[2](1000);
//   })
//   .then((result) => {
//     console.log(result);
//   });

// const arr = [setDelay, setDelay, setDelay];
// const temp = arr[0](1000);
// for (let index = 1; index <= arr.length; index++) {
//   if (index == arr.length) {
//     temp.then((result) => {
//       console.log("完成了");
//     });
//     break;
//   }
//   temp = temp.then((result) => {
//     console.log(result);
//     return arr[index - 1](1000);
//   });
// }

const timeout = (millisecond) => {
  return () => {
    return setDelay(millisecond);
  };
};

const functionArr = [timeout(6000), timeout(3000), timeout(1000)];

const demo = () => {
  functionArr.forEach(async (fuc) => {
    const result = await fuc();
    console.log(result);
  });

  // for (let index = 0; index < functionArr.length; index++) {
  //   const result = await functionArr[index]();
  //   console.log(result);
  // }
};

demo();
