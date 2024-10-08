function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [[arr[j + 1]], arr[j]] = [[arr[j]], arr[j + 1]]
                noSwaps = false
            }
        }
        if (noSwaps) {
            break
        }

    }
    return arr
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7, 9, 10])


/*
A sorting algorithm where the largest values bubble up to the top  
*/ 