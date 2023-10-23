var numbers = [10, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function quickSort(array, start, end) {
    var _a, _b;
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = array.length - 1; }
    if (start === end)
        return;
    var pivotIndex = start;
    var leftIndex = start;
    var rightIndex = end;
    while (rightIndex >= leftIndex) {
        var pivot = array[pivotIndex];
        var right = array[rightIndex];
        var left = array[leftIndex];
        if (right >= pivot)
            rightIndex--;
        if (left <= pivot)
            leftIndex++;
        if (left > pivot && right < pivot)
            _a = [
                array[rightIndex],
                array[leftIndex],
            ], array[leftIndex] = _a[0], array[rightIndex] = _a[1];
    }
    _b = [
        array[rightIndex],
        array[pivotIndex],
    ], array[pivotIndex] = _b[0], array[rightIndex] = _b[1];
    quickSort(array, start, rightIndex);
    quickSort(array, rightIndex + 1, end);
}
quickSort(numbers);
console.log(numbers);
