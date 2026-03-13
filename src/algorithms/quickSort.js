export function quickSort(array) {

  const animations = [];
  const arr = [...array];

  quickSortHelper(arr, 0, arr.length - 1, animations);

  return animations;
}

function quickSortHelper(arr, low, high, animations) {

  if (low < high) {

    const pivotIndex = partition(arr, low, high, animations);
     animations.push(["sorted", pivotIndex]); 
    quickSortHelper(arr, low, pivotIndex - 1, animations);
    quickSortHelper(arr, pivotIndex + 1, high, animations);

  }
}

function partition(arr, low, high, animations) {

  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {

    animations.push(["compare", j, high]);

    if (arr[j] < pivot) {

      i++;

      animations.push([
        "swap",
        i,
        arr[j],
        j,
        arr[i]
      ]);

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

    }
  }

  animations.push([
    "swap",
    i + 1,
    arr[high],
    high,
    arr[i + 1]
  ]);

  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}