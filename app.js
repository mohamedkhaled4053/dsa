var numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function insertionSort(array) {
    var _a;
    for (var i = 1; i < array.length; i++) {
        for (var j = i - 1; j >= 0; j--) {
            if (array[j] > array[j + 1]) {
                _a = [array[j], array[j + 1]], array[j + 1] = _a[0], array[j] = _a[1];
            }
            else {
                break;
            }
        }
    }
}
insertionSort(numbers);
console.log(numbers);
