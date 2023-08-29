const nums = [1, 2, 3, 4, 5, 6, 7];
const target = 9;

const searchInsert = (nums: number[], target: number): number => {
  // leftIndex is result index
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  if (nums.length === 0) {
    return leftIndex;
  }

  // targetNum not in array
  if (target < nums[0]) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  while (leftIndex <= rightIndex) {
    const middleIndex = leftIndex + ((rightIndex - leftIndex) >> 1);
    const middleNum = nums[middleIndex];

    if (middleNum === target) {
      leftIndex = middleIndex;
      break;
    }

    if (middleNum < target) {
      leftIndex = middleIndex + 1;
    }

    if (target < middleNum) {
      rightIndex = middleIndex - 1;
    }
  }

  return leftIndex;
};

console.log(searchInsert(nums, target));
