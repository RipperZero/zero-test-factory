/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

export const arrayPush = (array, values) => {
  // var index = -1,
  //     length = values.length,
  //     offset = array.length;

  const length = values.length,
    offset = array.length;
  let index = -1;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
};
