function uniqueValues(arr) {
    let newArray = []

    for (let i = 0; i < arr.length; i++){
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i])
        }
    }
   return newArray.length
}


uniqueValues([1, 2, 3, 3, 4, 5, 6])