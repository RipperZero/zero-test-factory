const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (array: number[], targetNum: number) => {
  // leftIndex is result index
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  if (array.length === 0) {
    return leftIndex;
  }

  // targetNum not in array
  if (targetNum < array[0] || array[array.length - 1] < targetNum) {
    return -1;
  }

  while (leftIndex <= rightIndex) {
    // >> 1 是将一个数向右移动一位，等效于除以 2 的整数部分(向下取整)。
    // 首先计算出 rightIndex - leftIndex，得到数组范围的一半，然后右移一位（相当于除以 2），
    // 最后再加上 leftIndex，得到中间索引。
    // 当 leftIndex 和 rightIndex 的值很大时，可能会出现整数溢出的情况。
    // 使用 rightIndex - leftIndex 来计算范围的一半，避免了在计算中间索引时产生溢出。
    const middleIndex = leftIndex + ((rightIndex - leftIndex) >> 1);
    const middleNum = array[middleIndex];

    if (middleNum === targetNum) {
      leftIndex = middleIndex;
      break;
    }

    if (middleNum < targetNum) {
      leftIndex = middleIndex + 1;
    }

    if (targetNum < middleNum) {
      rightIndex = middleIndex - 1;
    }
  }

  return leftIndex;
};

console.log(binarySearch(array, 1));
