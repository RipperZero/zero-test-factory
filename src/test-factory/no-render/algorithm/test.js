const array = [10, 8, 1, 3, 7, 9];

const bubbleSort = (array) => {
  if (!Array.isArray(array)) {
    console.log("not array");
  }

  const arrayLength = array.length;
  let isChange = true;

  for (let index = 0; index < arrayLength && isChange; index++) {
    isChange = false;

    for (let j = 0; j < arrayLength - index - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        isChange = true;
      }
    }
  }
};

const swap = (array, srcArgIndex, tarArgIndex) => {
  const tempArg = array[srcArgIndex];

  array[srcArgIndex] = array[tarArgIndex];
  array[tarArgIndex] = tempArg;
};

bubbleSort(array);
console.log(array);
