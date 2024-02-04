const x = 8;

/**
 * 使用二分查找 对middle进行取整
 */
const mySqrt = (x: number): number => {
  let leftNum = 0;
  let rightNum = x;
  let result = 0;

  while (leftNum <= rightNum) {
    const middleNum = Math.floor(leftNum + (rightNum - leftNum) / 2);
    const middleNumSqrt = middleNum * middleNum;

    if (middleNumSqrt <= x) {
      result = middleNum;
      leftNum = middleNum + 1;
    }

    if (x < middleNumSqrt) {
      rightNum = middleNum - 1;
    }
  }

  return result;
};

console.log(mySqrt(x));
