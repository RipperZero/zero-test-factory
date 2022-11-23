// ------------------------------------------------
// (() => {
//   const border = "horizontal-vertical";
//   if (~border.indexOf("horizontal")) {
//     console.log("11111111");
//   }
//   if (~border.indexOf("vertical")) {
//     console.log("22222");
//   }
// })();
// ------------------------------------------------

// ------------------------------------------------
// 如何判断一个数组
// 通过instanceof和constructor来判断不一定准确，因为可能会被重写。
// console.log(Array.isArray([]));
// console.log([] instanceof Array);
// console.log([].constructor === Array);
// console.log(Object.prototype.toString.call([]));
// ------------------------------------------------

// 默认值只在undefined时生效
// const testDefault = (param = 1) => {
//   console.log(param || 1);
// };
// console.log(testDefault(null));
