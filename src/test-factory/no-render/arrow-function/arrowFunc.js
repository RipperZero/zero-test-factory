// #region 箭头函数 this  ------------------------start
// 箭头函数 this
// *****浏览器环境为Window对象
// *****node环境为{}

// const obj = {
//   name: "张三",
//   getName() {
//     return this.name;
//   },
//   getName1: () => {
//     // @ts-ignore:next-line
//     console.log(this);
//     return this.name;
//   },
// };

// // @ts-ignore:next-line
// obj.__proto__.getName2 = function () {
//   console.log(this);
//   return this.name;
// };

// // @ts-ignore:next-line
// obj.__proto__.getName3 = () => {
//   // @ts-ignore:next-line
//   return this.name;
// };
// console.log("普通函数", obj.getName());
// // @ts-ignore:next-line
// console.log("普通函数", obj.getName2());
// console.log("箭头函数", obj.getName1());
// // @ts-ignore:next-line
// console.log("箭头函数", obj.getName3());
// #endregion 箭头函数 this  ------------------------end

// *****箭头函数限制
// *****1 没有 arguments 如果要用 可以用 rest 参数代替

// #region 箭头函数 arguments  ------------------------start
// 箭头函数 arguments
// *****浏览器环境 报错 arguments is not defined
// TODO check
// *****node环境为 当前模块的arguments???

// const fn1 = () => {
//   // eslint-disable-next-line no-undef
//   console.log("arguments", arguments);
//   // console.log("module", module);
// };
// fn1(100, 200);

// function fn2() {
//   console.log("arguments", arguments);
// }
// fn2(100, 200);

// const fn3 = (
//   // *****将入参合并为数组
//   ...values
// ) => {
//   console.log("values", values);
// };
// fn3(100, 200);
// fn3({ a: "aaa" }, { b: "bbb" });
// #endregion 箭头函数 arguments  ------------------------end

// *****箭头函数限制
// *****2 无法通过 apply、call、bind 改变this指向

// *****箭头函数 this
// *****浏览器环境为Window对象
// *****node环境为{}

// *****普通函数 this
// *****浏览器环境为Window对象
// *****node环境为global

// const obj = { a: 100 };

// const fn3 = () => {
//   console.log("this", this);
// };
// // fn3.apply(obj);
// // fn3.call(obj);
// // fn3.bind(obj)();
// fn3();

// function fn4() {
//   console.log("this", this);
// }
// // fn4.apply(obj);
// // fn4.call(obj);
// // fn4.bind(obj)();
// fn4();
