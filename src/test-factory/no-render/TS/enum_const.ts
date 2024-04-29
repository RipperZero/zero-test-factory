export {};

// enum device {
//   phone = 2,
//   notebook = 1,
//   desktop,
// }

// console.log(device.phone);
// console.log(device[2]);

// enum device {
//   phone = "1",
//   notebook,
//   desktop,
// }

// enum Person {
//   name = "前端娱乐圈",
//   age = 18,
// }

// enum Person {
//   name = "前端娱乐圈",
//   age = 3 * 6,
// }

// enum obj {
//   index, // 满足条件 常量
//   index1 = index, // 满足条件 常量
//   age = 2 << 1, // 满足条件 常量
//   num = 30 | 2, // 满足条件 常量
//   num1 = 10 + 29, // 满足条件 常量
// }

// enum obj {
//   nameLen = "前端娱乐圈".length, // 计算的
//   num = Math.random() * 100, // 计算的
// }

// const enum obj {
//   A = 1,
//   B = 3 * 6,
//   C = 1 & 2,
// }

// console.log(obj.A);
// console.log(obj.B);
// console.log(obj.C);

// ------------------------------------------ number
enum SimpleEnumNum {
  A = 2,
  B = 3,
  C = 4,
}

// 2
console.log(SimpleEnumNum.A);
// C
console.log(SimpleEnumNum[4]);
// undefined
console.log(SimpleEnumNum[0]);

// const SampleConstantNum = {
//   A: 2,
//   B: 3,
//   C: 4,
// } as const;

// console.log(SampleConstantNum.A);
// console.log(Object.keys(SampleConstantNum)[2]);

// type ValueOf<T> = T[keyof T];
// type ValueOfSampleConstantNum = ValueOf<typeof SampleConstantNum>;
// ------------------------------------------ number

// ------------------------------------------ string
// enum SimpleEnumString {
//   A = "AAA",
//   B = "BBB",
//   C = "CCC",
// }

// console.log(SimpleEnumString.A);
// // console.log(SimpleEnumString["AAA"]);

// const SimpleConstString = {
//   A: "AAA",
//   B: "BBB",
//   C: "CCC",
// } as const;
// console.log(SimpleConstString.A);
// console.log(Object.values(SimpleConstString));

// ------------------------------------------ string
// @see https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
enum ColorsEnum {
  red = "#DF2C2E",
  blue = "#008ED6",
  orange = "#E05123",
  yellow = "#FBC10B",
  green = "#0E7E60",
}

const testFuncA = (param: ColorsEnum) => {
  console.log(param);
};

testFuncA(ColorsEnum.blue);

const ColorsObj = {
  red: "#DF2C2E",
  blue: "#008ED6",
  orange: "#E05123",
  yellow: "#FBC10B",
  green: "#0E7E60",
} as const;
type KeyType = keyof typeof ColorsObj;
type ValueType = (typeof ColorsObj)[KeyType];
const testFuncB = (param: ValueType) => {
  console.log(param);
};

testFuncB(ColorsObj.blue);

// enum Zero {
//   A = 1,
//   B = A * 2,
// }

// what's P? start
// type A = {
//   a: number;
//   b: string;
// };

// type Zero = Pick<A, "a">;
// what's P? end
