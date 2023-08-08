// interface A {
//   a: number;
//   aa: string;
//   aaa: boolean;
// }
// interface B {
//   b: undefined;
// }
// interface C extends A, B {
//   c: null;
// }
// type A = {
//   a: number;
//   aa: string;
//   aaa: boolean;
// };
// type B = {
//   b: undefined;
// };
// type C = A & B & { c: null };
// const c: C = {
//   a: 0,
//   aa: "aa",
//   aaa: true,
//   b: undefined,
//   c: null,
// };
// console.log(c);
// class ZeroA {
//   private static aFunc = () => {
//     return "aaa";
//   };
// }
// ZeroA.aFunc();
// // @ts-ignore:next-line
// ZeroA.aFunc();
// class ZeroB {
//   public bFunc = () => {
//     return "bbb";
//   };
// }
// const objB = new ZeroB().bFunc;
// objB();
// ==================================================== validator
// import isEmail from "validator/lib/isEmail";
// import isMobilePhone from "validator/lib/isMobilePhone";
// const email = "123546@qq.com";
// const mobilePhone = "15249203158";
// console.log(isEmail(email));
// console.log(isMobilePhone(mobilePhone, "zh-CN"));
// ==================================================== js-base64
import { stringify } from "qs";

const params = { a: 1, b: 2, c: 3, d: 4 };

console.log(`1234${stringify(params, { addQueryPrefix: true })}`);
