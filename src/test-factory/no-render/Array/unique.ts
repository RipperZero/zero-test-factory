// @see https://segmentfault.com/a/1190000016418021?utm_source=tag-newest
export {};

const array = [1, 1, 2, 2, 3, 3, 4, 4];

// 利用ES6 Set去重（ES6中最常用）
// const unique = (array: number[]) => {
//   return Array.from(new Set(array));
// };

// 利用for嵌套for，然后splice()去重（ES5中最常用）
// const unique = (array: number[]) => {
//   for (let index = 0; index < array.length; index++) {
//     for (let j = index + 1; j < array.length; j++) {
//       // 第一个等同于第二个，splice方法删除第二个
//       if (array[index] === array[j]) {
//         array.splice(j, 1);
//         // 因为数组长度改变 恢复j
//         j--;
//       }
//     }
//   }

//   return array;
// };

// 利用indexOf()去重
// const unique = (array: number[]) => {
//   const _array = [];

//   for (let index = 0; index < array.length; index++) {
//     if (_array.indexOf(array[index]) === -1) {
//       _array.push(array[index]);
//     }
//   }

//   return _array;
// };

// 利用sort()
// const unique = (array: number[]) => {
//   array = array.sort();

//   const _array = [array[0]];

//   for (let index = 1; index < array.length; index++) {
//     if (array[index] !== array[index - 1]) {
//       _array.push(array[index]);
//     }
//   }

//   return _array;
// };
// console.log(unique(array));

// 利用includes()
// const unique = (array: number[]) => {
//   const _array: number[] = [];

//   for (let index = 0; index < array.length; index++) {
//     if (!_array.includes(array[index])) {
//       _array.push(array[index]);
//     }
//   }

//   return _array;
// };
// console.log(unique(array));

// 利用hasOwnProperty()
// const unique = (array: number[]) => {
//   const obj: any = {};

//   return array.filter((value) => {
//     // number1 ...
//     console.log(typeof value + value);
//     return obj.hasOwnProperty(typeof value + value)
//       ? false
//       : // 将value存入对象
//         // obj中key为 typeof value + value 值可为任意非异常值
//         (obj[typeof value + value] = "湖人总冠军");
//   });
// };

// 利用filter()
// const unique = (array: number[]) => {
//   return array.filter((value, index) => {
//     // 通过比较下标 只保留一个唯一元素
//     return array.indexOf(value, 0) === index;
//   });
// };

// 利用Map数据结构去重
// const unique = (array: number[]) => {
//   const map = new Map();
//   const _array = [];

//   for (let index = 0; index < array.length; index++) {
//     if (map.has(array[index])) {
//       continue;
//     }

//     // value可为任意值
//     map.set(array[index], "湖人总冠军");
//     _array.push(array[index]);
//   }

//   return _array;
// };

// 利用reduce() + includes()
const unique = (array: number[]) => {
  return array.reduce(
    (prev: number[], cur) => (prev.includes(cur) ? prev : [...prev, cur]),
    [],
  );
};
console.log(unique(array));
