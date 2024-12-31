import dayjs, { Dayjs } from "dayjs";

const isNullable = (value: any): value is null | undefined => {
  return value === null || value === undefined;
};

const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @description Improved from lodash's chunk
 * @category Array
 * @param array The array to process.
 * @param [size=1] The length of each chunk
 * @returns Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
const chunk = <T>(array: T[], size = 1) => {
  const roundedSize = Math.round(size);

  if (!Array.isArray(array)) {
    return [];
  }

  const length = array.length;

  if (length === 0 || roundedSize < 1) {
    return [];
  }

  let start = 0;
  const resultLength = Math.ceil(length / roundedSize);

  const result = Array.from<undefined>({ length: resultLength }).map(() => {
    return array.slice(start, (start += size));
  });

  return result;
};

const convertSearchParamsToObj = <T extends Record<string, string>>(
  searchParams: URLSearchParams,
) => {
  const obj = Object.fromEntries(searchParams.entries());

  return obj as Partial<T>;
};

const notEmptyArray = <T>(list: T[] | unknown): list is T[] => {
  return Array.isArray(list) && list.length > 0;
};

/**
 * Calculates the age in years and months based on the provided birth date
 * @param birthDate Dayjs or The birth date in "YYYYMMDD" format
 * @returns age = {year,month}
 *
 * @example
 * // today → 20240826
 * const birthDate = 20080908
 * const age = calculateAge(birthDate);
 * age = { year: 15, month: 11 }
 */
const calculateAge = (birthDate: number | string | Dayjs) => {
  const today = dayjs();
  const birthDay = dayjs.isDayjs(birthDate)
    ? birthDate
    : dayjs(
        typeof birthDate === "number" ? String(birthDate) : birthDate,
        "YYYYMMDD",
      );

  const year = today.diff(birthDay, "year");
  const month = today.diff(birthDay.add(year, "year"), "month");

  const age = {
    year: year,
    month: month,
  };

  return age;
};

/**
 * @param time HHmmss
 * @returns HH:mm
 */

const convertTime = (time: number | string) => {
  const timeDayjs = dayjs(
    typeof time === "number" ? String(time) : time,
    "HHmmss",
  );

  if (!timeDayjs.isValid()) {
    return "";
  }

  return timeDayjs.format("HH:mm");
};

export {
  isNullable,
  isEmptyObject,
  wait,
  chunk,
  convertSearchParamsToObj,
  notEmptyArray,
  calculateAge,
  convertTime,
};
