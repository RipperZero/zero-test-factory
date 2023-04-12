export {};

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
