function ascendingSort(arr) {
    return arr.sort((a, b) => a - b)
}

function ascendingSortFunction(arr) {
    return arr.sort(function (a, b) {
        return a - b
    })
}

ascendingSort([1, 4, 10, 9, 3])
ascendingSortFunction([1, 4, 10, 9, 3])



function ascendingSortSortCallBack(a, b) {
    return a-b
}

[1, 10, 2, 3, 15].sort(ascendingSortSortCallBack)

// built in sort uses unicode to compare 
// accepts an optional comperator function 