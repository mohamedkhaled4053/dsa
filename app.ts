const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]) {
  if (array.length === 1) return array;
  let sorted: number[] = [];
  let middle = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle, array.length));

  for (
    let leftIndex = 0, rightIndex = 0;
    leftIndex < left.length || rightIndex < right.length;

  ) {
    if (
      left[leftIndex] < right[rightIndex] ||
      (!right[rightIndex] && right[rightIndex] !== 0)
    ) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return sorted;
}

console.log(mergeSort(numbers));
