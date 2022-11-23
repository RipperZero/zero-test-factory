export {};

// -----------------------------完全不必要的 Else 块
// const ifElse = (param: number) => {
//   if (param > 5) {
//     // do somthing
//   } else {
//     // do somthing else
//   }
// };

// const ifElse = (param: number) => {
//   if (param > 5) {
//     // do somthing
//     return;
//   }

//   // do somthing else
// };

// -----------------------------价值分配
// const genderConvert = (param: number) => {
//   let gender = "";

//   if (param === 0) {
//     gender = "male";
//   } else if (param === 1) {
//     gender = "female";
//   } else {
//     gender = "unknown";
//   }

//   return gender;
// };

// const genderConvert = (param: number) => {
//   let gender: "male" | "female" | "unknown" = "unknown";

//   if (param === 0) {
//     gender = "male";
//   }
//   if (param === 1) {
//     gender = "female";
//   }

//   return gender;
// };

// -----------------------------前提条件检查
// const genderConvert = (param: number) => {
//   let gender: "male" | "female" | "unknown" = "unknown";

//   if (param < 0 || param > 1) {
//     console.log("param Error");
//     return gender;
//   }

//   param === 0 ? (gender = "male") : (gender = "female");

//   return gender;
// };

// -----------------------------将 If-Else 转换为字典—完全避免 If-Else
// to ec-mobile
