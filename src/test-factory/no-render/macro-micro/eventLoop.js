// ----------------------------------------------
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// new Promise(() => {
//   console.log(3);
// }).then(() => {
//   console.log(4);
// });
// console.log(5);
// ----------------------------------------------

// ----------------------------------------------
// setTimeout(function () {
//   console.log(1);
// }, 1000);
// new Promise(function (resolve) {
//   console.log(2);
//   for (let i = 0; i < 10000; i++) {
//     i === 9999 && resolve();
//   }
//   console.log(3);
// }).then(function () {
//   console.log(4);
// });
// console.log(5);
// ----------------------------------------------

// ----------------------------------------------
// console.log("script start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("promise1");
//   })
//   .then(() => {
//     console.log("promise2");
//   });

// console.log("script end");
// ----------------------------------------------

// ----------------------------------------------
console.log("script start");
setTimeout(() => {
  console.log("setTimeout");
});

new Promise((resolve) => {
  console.log("promise");
  resolve();
}).then(() => {
  console.log("then");
});

console.log("script end");
// ----------------------------------------------

// ----------------------------------------------
// console.log("1");

// setTimeout(function () {
//   console.log("2");
//   process.nextTick(function () {
//     console.log("3");
//   });
//   new Promise(function (resolve) {
//     console.log("4");
//     resolve();
//   }).then(function () {
//     console.log("5");
//   });
// });
// // micro task
// process.nextTick(function () {
//   console.log("6");
// });
// new Promise(function (resolve) {
//   console.log("7");
//   resolve();
// }).then(function () {
//   console.log("8");
// });

// setTimeout(function () {
//   console.log("9");
//   process.nextTick(function () {
//     console.log("10");
//   });
//   new Promise(function (resolve) {
//     console.log("11");
//     resolve();
//   }).then(function () {
//     console.log("12");
//   });
// });
// // 1 7 6 8 2 4 3 5 9 11 10 12
// ----------------------------------------------

// ----------------------------------------------
// console.log(1);

// setTimeout(function () {
//   console.log(2);
//   new Promise(function (resolve) {
//     console.log(7);
//     resolve();
//   }).then(function () {
//     console.log(8);
//   });
// }, 1000);

// setTimeout(function () {
//   console.log(10);
//   new Promise(function (resolve) {
//     console.log(11);
//     resolve();
//   }).then(function () {
//     console.log(12);
//   });
// }, 0);

// new Promise(function (resolve) {
//   console.log(3);
//   resolve();
// })
//   .then(function () {
//     console.log(4);
//   })
//   .then(function () {
//     console.log(9);
//   });

// console.log(5);

// 1 3 5 4 9 10 11 12 2 7 8
// ----------------------------------------------
