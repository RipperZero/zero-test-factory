const array = [9, 12, 5, 8, 3, 14];

const quickSort = (array, low, high) => {
  if (low < high) {
    const index = partation(array, low, high);

    quickSort(array, low, index - 1);
    quickSort(array, index + 1, high);
  }
};

const partation = (array, low, high) => {
  const pivot = array[low];

  while (low < high) {
    while (low < high && array[high] >= pivot) {
      high--;
    }

    array[low] = array[high];

    while (low < high && array[low] <= pivot) {
      low++;
    }

    array[high] = array[low];
  }

  array[low] = pivot;

  return low;
};

quickSort(array, 0, array.length - 1);
console.log(array);
