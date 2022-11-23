/**
 * The base implementation of `isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
export const baseIsNaN = (value) => {
  // eslint-disable-next-line no-self-compare
  return value !== value;
};
