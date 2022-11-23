import { baseIndexOf } from "./baseIndexOf";

/**
 * A specialized version of `includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
export const arrayIncludes = (array, value) => {
  //   const length = array == null ? 0 : array.length;
  const length = Array.isArray(array) ? array.length : 0;

  return !!length && baseIndexOf(array, value, 0) > -1;
};
