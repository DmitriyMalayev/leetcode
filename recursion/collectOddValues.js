function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) return

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

function filterOddNumbers(arr) {
    return arr.filter((num) => num % 2 !== 0)
}

collectOddValues([1, 2, 3, 4, 5])
filterOddNumbers([1, 2, 3, 4, 5])
