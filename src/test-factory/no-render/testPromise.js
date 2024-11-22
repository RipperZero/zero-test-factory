async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

//1
console.log("script start");
//2
setTimeout(function () {
  console.log("setTimeout");
}, 0);
//3
async1();
//4
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
//5
console.log("script end");
