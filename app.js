var numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function selectionSort(array) {
    var _a;
    var smallestIndex = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[j] < array[smallestIndex])
                smallestIndex = j;
        }
        _a = [array[smallestIndex], array[i]], array[i] = _a[0], array[smallestIndex] = _a[1];
    }
}
selectionSort(numbers);
console.log(numbers);
