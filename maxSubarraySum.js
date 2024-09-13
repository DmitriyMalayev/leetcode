function maxSubarraySum(arr, num) {
    let tempSum = 0
    let maxSum = 0

    if (arr.length < num) {
        return null
    }

    for (let i = 0; i < num; i++) {
        tempSum += arr[i]
    }

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

maxSubarraySum([1, 2, 6, 4, 5, 4], 3)