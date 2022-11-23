// https://es6.ruanyifeng.com/#docs/generator

// -------------------------------------------
// function* generator(str) {
//   yield "Hello" + str;
//   yield "World" + str;

//   return "Finish";
// }

// const test = generator("aaa");

// console.log(test.next());
// test.next();
// console.log(test.next());
// -------------------------------------------

// -------------------------------------------
// function* func() {
//   yield console.log("func");
//   yield console.log("123456");

//   return console.log("Finish");
// }

// const test = func();

// const timer = setInterval(() => {
//   test.next();
// }, 2000);

// setTimeout(() => {
//   clearInterval(timer);
// }, 8000);
// -------------------------------------------

// -------------------------------------------
// function* foo(x) {
//   console.log("x------" + x);
//   const y = 2 * (yield x + 1);
//   console.log("y------" + y);
//   const z = yield y / 3;
//   console.log("z------" + z);
//   console.log("x------" + x);

//   return x + y + z;
// }

// // const testA = foo(1);
// // // 首次执行 x=1 第一个yield返回 x+1
// // console.log(testA.next());
// // // 第二次执行 next()不带参数 导致 y 的值等于2 * undefined（即NaN）
// // console.log(testA.next());
// // // 第三次执行 next()不带参数 z等于undefined 返回对象的value属性等于5 + NaN + undefined 即NaN
// // console.log(testA.next());

// const testB = foo(2);
// // 3
// console.log(testB.next());
// // 2
// console.log(testB.next(3));
// // 17
// console.log(testB.next(9));
// -------------------------------------------

// -------------------------------------------
// function* g() {
//   yield 1;
//   console.log("throwing an exception");
//   throw new Error("generator broke!");
//   yield 2;
//   yield 3;
// }

// function log(generator) {
//   let v;
//   console.log("starting generator");
//   try {
//     v = generator.next();
//     console.log("第一次运行next方法", v);
//   } catch (err) {
//     console.log("捕捉错误", v);
//   }
//   try {
//     v = generator.next();
//     console.log("第二次运行next方法", v);
//   } catch (err) {
//     console.log("捕捉错误", v);
//   }
//   try {
//     v = generator.next();
//     console.log("第三次运行next方法", v);
//   } catch (err) {
//     console.log("捕捉错误", v);
//   }
//   console.log("caller done");
// }

// log(g());
// -------------------------------------------

// -------------------------------------------
const clock = function* () {
  while (true) {
    console.log("Tick!");
    yield;
    console.log("Tock!");
    yield;
  }
};

const test = clock();
test.next();
test.next();
test.next();
test.next();
test.next();
test.next();
// -------------------------------------------
