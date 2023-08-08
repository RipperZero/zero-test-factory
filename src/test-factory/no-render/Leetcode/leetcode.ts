const nums = [2, 7, 11, 15];

const twoSum = (nums: number[], target: number): number[] => {
  /**
   * @param key previousNum from previous loop
   * @param value previousValue's index
   */
  const previousNumMap = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const currentNum = nums[index];
    const gapNum = target - currentNum;

    // gapNum === previousNum
    if (previousNumMap.has(gapNum)) {
      return [previousNumMap.get(gapNum)!, index];
    }

    // set currentNum to previousNumMap
    previousNumMap.set(currentNum, index);
  }

  return [];
};

console.log(twoSum(nums, 9));
