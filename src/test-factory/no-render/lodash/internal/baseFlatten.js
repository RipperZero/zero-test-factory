import { isFlattenable } from "./isFlattenable";

/**
 * The base implementation of `flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
export const baseFlatten = (array, depth, predicate, isStrict, result) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  predicate || (predicate = isFlattenable);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  result || (result = []);

  //   if (array == null) {
  if (!Array.isArray(array)) {
    return result;
  }

  //   for (const value of array) {
  //     if (depth > 0 && predicate(value)) {
  //       if (depth > 1) {
  //         // Recursively flatten arrays (susceptible to call stack limits).
  //         baseFlatten(value, depth - 1, predicate, isStrict, result);
  //       } else {
  //         result.push(...value);
  //       }
  //     } else if (!isStrict) {
  //       result[result.length] = value;
  //     }
  //   }

  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      depth > 1
        ? baseFlatten(value, depth - 1, predicate, isStrict, result)
        : result.push(...value);

      continue;
    }

    if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
};
