function bubbleSort(array) {

    for (let j = array.length; 0 < j; j--) {
        for (let k = 0; k < array.length - 1; k++) {
            if (array[k] >= array[k + 1]) [array[k], array[k + 1]] = [array[k + 1], array[k]]
        }
    }
    return array
}