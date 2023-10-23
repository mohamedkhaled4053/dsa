const numbers = [10, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array: number[], start = 0, end = array.length - 1) {
  if (start === end) return;
  let pivotIndex = start;
  let leftIndex = start;
  let rightIndex = end;

  while (rightIndex >= leftIndex) {
    let pivot = array[pivotIndex];
    let right = array[rightIndex];
    let left = array[leftIndex];
    if (right >= pivot) rightIndex--;
    if (left <= pivot) leftIndex++;
    if (left > pivot && right < pivot)
      [array[leftIndex], array[rightIndex]] = [
        array[rightIndex],
        array[leftIndex],
      ];
  }

  [array[pivotIndex], array[rightIndex]] = [
    array[rightIndex],
    array[pivotIndex],
  ];

  quickSort(array, start, rightIndex);
  quickSort(array, rightIndex + 1, end);
}

quickSort(numbers);
console.log(numbers);
