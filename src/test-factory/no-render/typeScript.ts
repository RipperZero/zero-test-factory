export {};
// @see https://juejin.cn/post/6985296521495314445

// -----------------------------------
// interface Ant {
//   name: string;
//   weight: number;
// }

// interface Fly {
//   flyHeight: number;
//   speed: number;
// }

// const flyAnt: Ant & Fly = {
//   name: "蚂蚁",
//   weight: 0.1,
//   flyHeight: 100,
//   speed: 100,
// };
// -----------------------------------

// -----------------------------------
// class Bird {
//   fly() {
//     console.log("Bird Flying");
//   }
//   layEggs() {
//     console.log("Bird layEggs");
//   }
// }

// class Fish {
//   swim() {
//     console.log("Fish swimming");
//   }
//   layEggs() {
//     console.log("Fish layEggs");
//   }
// }

// const bird = new Bird();
// const fish = new Fish();

// const isBird = (bird: Bird | Fish): bird is Bird => {
//   return !!(bird as Bird).fly;
// };

// const start = (pet: Bird | Fish) => {
//   pet.layEggs();
//   //   pet.swim();

//   isBird(pet) ? pet.fly() : pet.swim();
// };

// -----------------------------------

// -----------------------------------
// interface Person {
//   name: string;
//   age: number;
//   gender: number;
// }

// type ReadOnly<T> = {
//   readonly [P in keyof T]: T;
// };

// type ReadOnlyPerson = ReadOnly<Person>;
// -----------------------------------

// -----------------------------------
// 判断 T 是否能赋值给 (param: infer P) => any，并且将参数推断为泛型 P，
// 如果可以赋值，则返回参数类型 P，否则返回传入的类型
// type ParamType<T> = T extends (param: infer P) => any ? P : T;

// type FunctionType = (value: number) => string;

// type Param = ParamType<FunctionType>;

// 判断 T 是否能赋值给 (param: any) => infer U，并且将返回值类型推断为泛型 U，
// 如果可以赋值，则返回返回值类型 P，否则返回传入的类型
// type ReturnValue<T> = T extends (param: any) => infer U ? U : T;

// type FunctionType = (value: number) => boolean;

// type Return = ReturnValue<FunctionType>;

// type OtherReturn = ReturnValue<number>;
// -----------------------------------

// -----------------------------------
// type Person = {
//   name: string;
//   age: number;
// };

// type Test = Readonly<Person>;
// -----------------------------------

// -----------------------------------
// type Person = {
//   name: string;
// };

// const personList: ReadonlyArray<Person> = [
//   { name: "testA" },
//   { name: "testB" },
// ];
// // Property 'pop' does not exist on type 'readonly Person[]'.ts(2339)
// // personList.pop();

// personList[0].name = "changeName";
// -----------------------------------

// -----------------------------------
// type Person = {
//   name: string;
//   age: number;
// };

// // const person: Person = {};

// let person: Partial<Person> = {};

// person = { name: "123" };
// person = { name: "456", age: 1 };

// console.log(person);
// -----------------------------------

// -----------------------------------
// type Person = {
//   name?: string;
//   age?: number;
// };

// const person: Required<Person> = { name: "123", age: 1 };
// -----------------------------------

// -----------------------------------
// type A = "a" | "b" | "c";
// type B = "a" | "c" | "e" | "f";
// type C = string | number | (() => void);

// type Test1 = Extract<A, B>;
// type Test2 = Extract<C, Function>;

// type Test3 = Exclude<A, B>;
// type Test4 = Exclude<C, Function>;
// -----------------------------------

// -----------------------------------
// type Person = {
//   name: string;
//   age: number;
// };

// const personList = [
//   { name: "Jack", age: 26 },
//   { name: "Lucy", age: 22 },
//   { name: "Rose", age: 18 },
// ];

// const personMap: Record<string, Person> = {};

// personList.map((person) => {
//   return (personMap[person.name] = person);
// });

// function doSomething(obj: Record<string, any>) {}
// -----------------------------------

// -----------------------------------
// type T01 = NonNullable<string | number | undefined>; // string | number

// type T02 = NonNullable<(() => string) | string[] | null | undefined>; // (() => string) | string[]

// type T03 = NonNullable<
//   { name?: string; age: number } | string[] | null | undefined
// >; // {name?: string, age: number} | string[]
// -----------------------------------

// -----------------------------------
// class Person {
//   name: string;
//   age: number;
//   // weight: number;
//   gender: "man" | "women";

//   constructor(name: string, age: number, gender: "man" | "women") {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// type ConstructorType = ConstructorParameters<typeof Person>;
// const paramsA: ConstructorType = ["123", 1, "man"];

// type Instance = InstanceType<typeof Person>;
// const paramsB: Instance = { name: "123", age: 1, gender: "man" };
// -----------------------------------

// -----------------------------------
// type FunctionType = (name: string, age: number) => boolean;

// type FunctionParamsType = Parameters<FunctionType>;

// const params: FunctionParamsType = ["123", 1];
// -----------------------------------

// -----------------------------------
// type FunctionType = (name: string, age: number) => boolean | string;

// type FunctionReturnType = ReturnType<FunctionType>; // boolean | string
// -----------------------------------

// type KeyofAny = keyof any;
// type KeyofUnknown = keyof unknown;

// const isString = (value: unknown): value is string => typeof value === "string";

// const zero = (value: string | number) => {
//   if (isString(value)) {
//     value.toUpperCase();
//   }
// };

const severity: "info" | "warning" | "error" | undefined = undefined;

const a = {
  info: "123",
  warning: "456",
  error: "789",
  // @ts-expect-error:next-line
}[severity];

console.log(a);
