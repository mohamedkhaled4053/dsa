const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]) {
  let smallestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) smallestIndex = j;
    }
    [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }
}

selectionSort(numbers);
console.log(numbers);
