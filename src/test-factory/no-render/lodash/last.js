/**
 * Gets the last element of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
export const last = (array) => {
  //   const length = array == null ? 0 : array.length;
  const length = Array.isArray(array) ? array.length : 0;

  return length ? array[length - 1] : undefined;
};
