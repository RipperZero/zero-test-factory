export {};

// @see https://github.com/chefyuan/algorithm-base/blob/main/animation-simulation/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F.md
// 算法名称	最好时间复杂度	最坏时间复杂度	平均时间复杂度	空间复杂度	是否稳定
// 冒泡排序	O(n)	         O(n^2)	        O(n^2)	       O(1)	      稳定
const array = [4, 3, 5, 9, 1];

const bubbleSort = (array: number[]) => {
  const length = array.length;
  let isChange = true;

  for (let index = 0; index < length && isChange; index++) {
    isChange = false;

    for (let j = 0; j < length - index - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        isChange = true;
      }
    }
  }
};

const swap = (array: number[], srcIndex: number, tarIndex: number) => {
  let tempNum;

  tempNum = array[srcIndex];
  array[srcIndex] = array[tarIndex];
  array[tarIndex] = tempNum;
};

bubbleSort(array);
console.log(array);
