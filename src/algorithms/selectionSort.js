export function selectionSort(array) {

  const animations = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {

      animations.push(["compare", minIndex, j]);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

    }

    if (minIndex !== i) {

      animations.push([
        "swap",
        i,
        arr[minIndex],
        minIndex,
        arr[i]
      ]);

      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

    }
    animations.push(["sorted", i]);
  }

  return animations;
}