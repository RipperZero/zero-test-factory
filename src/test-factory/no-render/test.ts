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
// const a: number[] = [1];
// const b: number[] = [];
// const c = [...a, ...b];
// console.log(Math.max(...c) >= 0);
// const params = { a: 111, b: "bbb" };
// const empty = {};
// // @ts-ignore:next-line
// const { a, b, c, ...rest } = empty;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);
// const d = undefined;
// const e = {};
// // @ts-ignore:next-line
// console.log({ ...d });
// /**
//  * truncateByBytes
//  * @param str
//  * @param byteLimit
//  */
// export const truncateByBytes = (str: string, byteLimit: number) => {
//   // 将字符串转换为UTF-8编码的字节序列
//   let byteSeq = new TextEncoder().encode(str);
//   console.log("bvefore byteSeq", byteSeq);
//   // 如果字节数超过限制，截取字节序列
//   if (byteSeq.length > byteLimit) {
//     byteSeq = byteSeq.slice(0, byteLimit);
//   }
//   console.log("after byteSeq", byteSeq);
//   // 将字节序列转换回字符串
//   let resultStr = new TextDecoder().decode(byteSeq);
//   return resultStr;
// };
// const str = "123456789あ";
// // const str = "123456789啊";
// const truncated = truncateByBytes(str, 10);
// console.log(truncated);
// console.log(new TextEncoder().encode(truncated));
