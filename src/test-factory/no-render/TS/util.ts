export {};
// @see https://mp.weixin.qq.com/s/QtlViS4uV0iUfO7f6F9Myw

const ColorsObj = {
  red: "#DF2C2E",
  blue: "#008ED6",
  orange: "#E05123",
  yellow: "#FBC10B",
  green: "#0E7E60",
} as const;

type Template = {
  a: "A";
  b: "B";
  c: "C";
};

type TemplateTuple = ["a", "b", "c"];

// #region -------------------------------- Pick
type PickUtil<
  T,
  K extends keyof T = keyof T, // 添加默认值(keyof T)
> = {
  [P in K]: T[P];
};

type TestPickUtil = PickUtil<Template, "a">;
// 官方Pick没有默认值
// type TestPick = Pick<Template>;
// #endregion -------------------------------- Pick

// #region -------------------------------- ReadOnly
type ReadOnlyUtil<T> = {
  readonly [P in keyof T]: T[P];
};

type TestReadOnlyUtil = ReadOnlyUtil<Template>;
type TestReadOnly = Readonly<Template>;
// #endregion -------------------------------- ReadOnly

// #region -------------------------------- FirstArray
type PickArrayElement<T extends unknown[]> = T["length"] extends 0
  ? never
  : T[0];

type TestPickArrayElementUtil = PickArrayElement<Template[]>;
// #endregion -------------------------------- FirstArray

// #region -------------------------------- TupleLength
type TupleLength<T extends unknown[]> = T["length"];

type TestTupleLengthUtil = TupleLength<TemplateTuple>;
// #endregion -------------------------------- TupleLength

// #region -------------------------------- Exclude
/**
 * @type U UnionType
 * @type E ExcludedMembers
 */
type ExcludeUtil<U, E> = U extends E ? never : U;

type TestExcludeUtil = ExcludeUtil<"a" | "b", "a" | "c">;
// #endregion -------------------------------- Exclude

// TODO Awaited
// #region -------------------------------- Awaited
// #endregion -------------------------------- Awaited

// #region -------------------------------- If
type If<C, T, F> = C extends true ? T : F;

type TestIf = If<true, number, string>;
// #endregion -------------------------------- If
