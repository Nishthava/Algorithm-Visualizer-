export function bubbleSort(array) {

  const animations = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i - 1; j++) {

      animations.push(["compare", j, j + 1]);

      if (arr[j] > arr[j + 1]) {

        animations.push([
          "swap",
          j,
          arr[j + 1],
          j + 1,
          arr[j]
        ]);

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

      }

    }
    animations.push(["sorted", arr.length - i - 1]);

  }

  return animations;

}