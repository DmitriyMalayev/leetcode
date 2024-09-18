function countUniqueValuesTP(ar) {
    if (ar.length === 0) {
        return 0
    }

    let i = 0
    for (let j = 1; j < ar.length; j++) {
        if (ar[j] !== ar[i]) {
            i++
            ar[i] = ar[j]
        }
    }
    return i + 1
}

function countUniqueValuesTP(arr) {
    if (arr.length === 0) {
        return 0
    }

    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1

}

countUniqueValuesTP([1, 2, 3, 3, 4, 5])


function countUniqueValues(arr) {
    let numMap = {}

    for (let num of arr) {
        if (numMap[num]) {
            numMap[num]++
        } else {
            numMap[num] = 1
        }
    }
    return Object.keys(numMap).length
}

function countUniqueValuesSet(arr) {
    return Array.from(new Set(arr)).length

}


countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 15, 20, 21])
countUniqueValuesSet([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 15, 20, 21])
