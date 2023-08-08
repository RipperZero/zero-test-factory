const x = 0;

const isPalindrome = (x: number): boolean => {
  if (
    // 负数
    x < 0 ||
    // 末位为0 首位也必须为0 只有0满足条件
    (x % 10 === 0 && x !== 0)
  ) {
    return false;
  }

  let revertedNumber = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return (
    // x位数为偶数
    x === revertedNumber ||
    // x位数为奇数 去除中位数
    x === Math.floor(revertedNumber / 10)
  );
};

console.log(isPalindrome(x));
