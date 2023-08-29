export {};

// @see https://github.com/chefyuan/algorithm-base/blob/main/animation-simulation/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%92%8C%E7%AE%97%E6%B3%95/%E7%AE%80%E5%8D%95%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F.md
// instability
const array = [4, 3, 3, 5, 9, 1];

const selectionSort = (array: number[]) => {
  const arrayLength = array.length;
  let minIndex;

  for (let index = 0; index < arrayLength; index++) {
    minIndex = index;

    // 遍历到最小值
    for (let j = index + 1; j < arrayLength; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== index) {
      swap(array, minIndex, index);
    }
  }
};

const swap = (array: number[], srcIndex: number, tarIndex: number) => {
  let tempNum;

  tempNum = array[srcIndex];
  array[srcIndex] = array[tarIndex];
  array[tarIndex] = tempNum;
};

selectionSort(array);
console.log(array);
