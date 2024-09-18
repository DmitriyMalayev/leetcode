// Write a function called sumZero which accepts a Sorted array of integers. The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if the pair doesn't exist 


function sumZeroQuadratic(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; i++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

function sumZeroLinear(arr){
    let left = 0
    let right = arr.length -1 

    while (left < right ){
        let sum = arr[left] + arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++ 
        }
    }
}

sumZeroLinear([-1,-2,-3,1,2,3,4])

