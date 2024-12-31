export {};

// @see https://github.com/chefyuan/algorithm-base/blob/main/animation-simulation/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.md
// instability
const array = [4, 3, 3, 5, 9, 1];

// low < high 保证low与high重合时终止运行

const quickSort = (array: number[], low: number, high: number) => {
  if (low < high) {
    // index为low === high的重合位置
    const index = partation(array, low, high);

    // 以index为分界线进行递归
    quickSort(array, low, index - 1);
    quickSort(array, index + 1, high);
  }
};

const partation = (array: number[], low: number, high: number) => {
  // 从数组左边取pivot
  const pivot = array[low];

  // low与high 不重合
  while (low < high) {
    // 从数组右边取数与pivot比较 没有取到就向左移动high
    // 直到取到小于或等于pivot的数
    while (low < high && array[high] >= pivot) {
      high--;
    }

    // if (low < high) {
    // 向左移动
    array[low] = array[high];
    // }

    // 从数组左边取数与pivot比较 没有取到就向右移动low
    // 直到取到大于或等于pivot的数
    while (low < high && array[low] <= pivot) {
      low++;
    }

    // if (low < high) {
    // 向右移动
    array[high] = array[low];
    // }
  }

  // low === high 重合 回填pivot
  array[low] = pivot;

  return low;
};

quickSort(array, 0, array.length - 1);
console.log(array);
