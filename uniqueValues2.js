function uniqueValues2(arr) {
    if (!arr) {
        return 0
    }
    let i = 0

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            i = arr[j]
        } else {
            i++
        }
    }
    return i + 1
}


uniqueValues2([1, 2, 3, 3, 4, 5, 5, 5, 6])