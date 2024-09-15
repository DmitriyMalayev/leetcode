function binarySearch(arr, num) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== num && start <= end) {
        if (num > arr[middle]) { //15 < 9
            start = middle + 1
        } else {
            end = middle - 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if (arr[middle] === num) {
        return middle
    } else {
        return -1
    }
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)
/*
binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)

*/
