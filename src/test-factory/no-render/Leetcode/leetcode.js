const nums = [3, 3];

const twoSum = (nums, target) => {
  const reasultMap = new Map();

  for (let index = 0; index < nums.length; index++) {
    const currentNum = nums[index];
    const targetNum = target - currentNum;

    if (reasultMap.has(targetNum)) {
      return [reasultMap.get(targetNum), index];
    }

    reasultMap.set(currentNum, index);
  }

  return [];
};

console.log(twoSum(nums, 6));
