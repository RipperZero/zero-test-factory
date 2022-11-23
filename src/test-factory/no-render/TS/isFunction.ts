// export type Function = {
//   readonly name: string;
// };

export const isFunction = (v: any): v is Function => typeof v == "function";

console.log(isFunction(undefined));

// export const testFunctionType = (arg: Function) => {
//   console.log(arg);
// };

// export function func() {
//   console.log("funcfuncfunc");
// }

// const obj = {
//   a: 12,
//   b: () => {},
// };

// let s = Symbol();

// console.log(testFunctionType(null));
// console.log(testFunctionType(undefined));
// console.log(testFunctionType(1));
// console.log(testFunctionType("string"));
// console.log(testFunctionType(true));
// console.log(testFunctionType(obj));
// console.log(testFunctionType(s));
// console.log(testFunctionType(func));
// console.log(testFunctionType(() => {}));
