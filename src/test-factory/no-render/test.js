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
// ------------------------------------------------
// 默认值只在undefined时生效
// const testDefault = (param = 1) => {
//   console.log(param || 1);
// };
// console.log(testDefault(null));
// ------------------------------------------------
// ------------------------------------------------
// const pA = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Promise A resolve");
//     // reject("Promise A reject");
//   });
// };
// const pB = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Promise B resolve");
//     // reject("Promise B reject");
//   });
// };
// const pC = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Promise C resolve");
//     reject("Promise C reject");
//   });
// };
// const asyncFun = async () => {
//   const resA = await pA();
//   console.log("AAAAAA");
//   console.log(resA);
//   const resB = await pB();
//   console.log("BBBBBB");
//   console.log(resB);
//   console.log("CCCCCC");
//   const resC = await pC();
//   console.log(resC);
// };
// console.time("asyncFun");
// asyncFun().catch((error) => {
//   console.log("error error error error");
//   console.log(error);
// });
// console.timeEnd("asyncFun");
// ------------------------------------------------
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
// const strs = ["flower", "flow", "flight"];
// const zero = () => {
//   console.log(strs.shift());
//   console.log(strs);
// };
// zero();
// Object.keys(obj).length === 0
// const a = {};
// const { b, ...rest } = a;
// console.log("b", b);
// console.log("rest", rest);
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// const aaa = () => {
//   try {
//     array.forEach((item) => {
//       if (item === 5) {
//         throw Error;
//       }
//       console.log(item);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// aaa();
// function baz() {
//   // 当前调用栈是：baz
//   // 因此，当前调用位置是全局作用域
//   console.log("baz");
//   bar(); // <-- bar的调用位置
// }
// function bar() {
//   // 当前调用栈是baz -> bar
//   // 因此，当前调用位置在baz中
//   console.log("bar");
//   foo(); // <-- foo的调用位置
// }
// function foo() {
//   // 当前调用栈是baz -> bar -> foo
//   // 因此，当前调用位置在bar中
//   console.log("foo");
// }
// baz(); // <-- baz的调用位置
// function foo() {
//   console.log(this.a);
// }
// const foo = () => {
//   console.log(this.a);
// };
// const obj = {
//   a: 2,
//   foo: foo,
// };
// obj.foo();
// import { cloneDeep, merge } from "lodash";
// const object = {
//   a: [{ b: 2, c: 2 }, { d: 4 }],
//   x: { x1: [1, 2], x2: [{ x21: 666, x33: 999 }] },
//   y: 88888,
// };
// const other = {
//   a: [{ c: 3 }, { e: 5 }],
//   x: { x1: [0, 1, 2], x2: [{ x21: 777, x22: 888 }] },
//   z: "湖人总冠军！！！",
// };
// const mergeResultWithCloneDeep = merge(cloneDeep(object), other);
// console.log("object", object);
// console.log("other", other);
// console.log("mergeResultWithCloneDeep", mergeResultWithCloneDeep);
// console.log(object === mergeResultWithCloneDeep);
// console.log([...(undefined ?? []), ...[1, 2, 3]]);
const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmptyObject(null));
