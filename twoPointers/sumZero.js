function subZero(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            left++
        } else {
            right++
        }
    }
}

subZero([-1, -2, -3, 1, 2, 3])