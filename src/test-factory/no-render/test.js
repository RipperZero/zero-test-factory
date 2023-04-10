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
// import dayjs from "dayjs";

// console.log(dayjs("2023/03/02").format("DD/MM/YYYY"));
// console.log(dayjs("2023/03/02", "MM/DD").toString());

// function spArr(arr, num) {
//   //arr是你要分割的数组，num是以几个为一组
//   let newArr = []; //首先创建一个新的空数组。用来存放分割好的数组
//   for (let i = 0; i < arr.length; ) {
//     //注意：这里与for循环不太一样的是，没有i++
//     newArr.push(arr.slice(i, (i += num)));
//   }
//   return newArr;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const splitArray = (arr, num) => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += num) {
//     newArr.push(arr.slice(i, i + num));
//   }

//   return newArr;
// };
// console.log(splitArray(arr, 4));
// import { decode } from "js-base64";
// const url = "http://10.167.23.70:3000/?companyCD=c3VwZXI=&companyID=MQ==";

// console.log(decode("c3VwZXI="));
// console.log(decode("MQ=="));
import { round, divide, times, minus } from "number-precision";

const standardPrice = 66;
const discount = 13.3;

let _discountedPrice =
  discount > 0
    ? times(standardPrice, round(divide(discount, 100), 3))
    : standardPrice;

_discountedPrice = Math.floor(_discountedPrice);
const singleDigitsOfDiscountedPrice = _discountedPrice % 10;

/** 仕切価格 */
const discountedPrice =
  singleDigitsOfDiscountedPrice > 0
    ? minus(_discountedPrice, singleDigitsOfDiscountedPrice)
    : _discountedPrice;
console.log(discountedPrice);

// const num = 456987231324132.33333;
// console.log(num.toLocaleString("ja", { style: "currency", currency: "JPY" }));
