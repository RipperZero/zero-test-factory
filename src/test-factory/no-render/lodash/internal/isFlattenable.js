import { isArguments } from "../isArguments.js";

/** Built-in value reference. */
const spreadableSymbol = Symbol.isConcatSpreadable;

export const isFlattenable = (value) => {
  return (
    Array.isArray(value) ||
    isArguments(value) ||
    !!(value && value[spreadableSymbol])
  );
};
