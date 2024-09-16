function descendingSort(arr) {
    return arr.sort((a, b) => b - a)
}

function descendingSortFunction(arr) {
    return arr.sort(function (a, b) {
        return b - a
    })
}

descendingSort([1, 4, 10, 9, 3])
descendingSortFunction([1, 4, 10, 9, 3])