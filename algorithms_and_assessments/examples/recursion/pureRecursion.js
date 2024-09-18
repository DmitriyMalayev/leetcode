function purelyCollectOddNumbers(arr){
    let result = []

    if (arr.length === 0){
        return result
    }

    if (arr[0] % 2 !== 0){
        result.push(arr[0])
    }

    result = result.concat(purelyCollectOddNumbers(arr.slice(1)))
    return result 
}