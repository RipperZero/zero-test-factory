// 箭头函数没有Arguments对象
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// const factorial = (num) => {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   }
// };

let factorial = function (num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
};

console.log(factorial(5));

let trueFactorial = factorial;

factorial = () => {
  return "Changed Function Content";
};

console.log(trueFactorial(5));
console.log(factorial());
