import { arrayPush, baseFlatten, copyArray } from "./internal";

// export function concat() {
//   var length = arguments.length;
//   if (!length) {
//     return [];
//   }
//   var args = Array(length - 1),
//     array = arguments[0],
//     index = length;

//   while (index--) {
//     args[index - 1] = arguments[index];
//   }
//   return arrayPush(
//     Array.isArray(array) ? copyArray(array) : [array],
//     baseFlatten(args, 1),
//   );
// }

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
export const concat = (...argumentsArray) => {
  const length = argumentsArray.length;

  if (!length) {
    return [];
  }

  const array = argumentsArray[0];
  const args = argumentsArray.slice(1);

  return arrayPush(
    Array.isArray(array) ? copyArray(array) : [array],
    baseFlatten(args, 1),
  );
};
