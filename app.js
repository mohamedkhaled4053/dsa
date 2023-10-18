var numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// function bubbleSort(array: number[]) {
//   let length = array.length;
//   while (length > 1) {
//     for (let i = 0; i < length; i++) {
//       if (array[i] > array[i + 1]) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//       }
//     }
//     length--;
//   }
//   return array;
// }
function bubbleSort(array) {
    var _a;
    var length = array.length;
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < length; i++) {
            if (array[i] > array[i + 1]) {
                _a = [array[i + 1], array[i]], array[i] = _a[0], array[i + 1] = _a[1];
                swapped = true;
            }
        }
        length--;
    }
    return array;
}
bubbleSort(numbers);
console.log(numbers);
