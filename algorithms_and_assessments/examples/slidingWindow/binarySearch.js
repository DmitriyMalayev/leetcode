//Given a sorted array of integers, write a function called binarySearch that accepts a value and returns the index where the value passed to the function is located. If the value isn't found, return -1

function binarySearch(arr, value) {
    let min = 0
    let max = arr.length - 1

    while (min < max) {
        let middle = Math.floor((min + max) / 2)
        let currentElement = arr[middle]

        if (arr[middle] < value) {
            min = middle + 1
        } else if (arr[middle] > value) {
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

binarySearch([1,2,3,4,5], 2)


// function binarySearch(arr, num) {
//     let min = 0
//     let max = arr.length - 1

//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2)
//         let currentElement = arr[middle]

//         if (arr[middle] < num) {
//             min = middle + 1
//         } else if (arr[middle] > num) {
//             max = middle - 1
//         } else {
//             return middle
//         }
//     }
//     return -1
// }