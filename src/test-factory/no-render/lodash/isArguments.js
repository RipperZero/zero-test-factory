import { getTag } from "./internal";
import { isObjectLike } from "./isObjectLike";

export const isArguments = (value) => {
  // return isObjectLike(value) && getTag(value) == '[object Arguments]'
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
};
