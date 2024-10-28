const promise = new Promise((resolve, reject) => {
  resolve("aaaa");
});

promise.then((res) => console.log("res1:", res));
promise.then((res) => console.log("res2:", res));
promise.then((res) => console.log("res3:", res));

// 停顿1s后，会继续输出该内容
setTimeout(() => {
  promise.then((res) => console.log("res4:", res));
}, 1000);

setTimeout(() => {
  promise.then((res) => console.log("res5:", res));
}, 2000);
