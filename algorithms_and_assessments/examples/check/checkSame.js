function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let checkIndex = arr2.indexOf(arr1[i] ** 2)
        if (checkIndex === -1){
            return false 
        }
        arr2.splice(checkIndex,1)
    }
    return true 

}

same([1, 2, 3], [1, 4, 9])