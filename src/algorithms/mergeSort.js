export function mergeSort(array) {

  const animations = [];
  const aux = array.slice();

  mergeSortHelper(array, 0, array.length - 1, aux, animations);

  return animations;
}

function mergeSortHelper(main, start, end, aux, animations) {

  if (start === end) return;

  const mid = Math.floor((start + end) / 2);

  mergeSortHelper(aux, start, mid, main, animations);
  mergeSortHelper(aux, mid + 1, end, main, animations);

  merge(main, start, mid, end, aux, animations);
}

function merge(main, start, mid, end, aux, animations) {

  let k = start;
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {

    animations.push(["compare", i, j]);

    if (aux[i] <= aux[j]) {

      animations.push(["overwrite", k, aux[i]]);
      main[k++] = aux[i++];

    } else {

      animations.push(["overwrite", k, aux[j]]);
      main[k++] = aux[j++];

    }
  }

  while (i <= mid) {

    animations.push(["overwrite", k, aux[i]]);
    main[k++] = aux[i++];
  }

  while (j <= end) {

    animations.push(["overwrite", k, aux[j]]);
    main[k++] = aux[j++];
  }
}