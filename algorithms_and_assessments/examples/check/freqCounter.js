function freqCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for (let num of arr1){
        if (freqCounter1[num]){
            freqCounter1[num]++ 
        } else {
            freqCounter1[num] = 1
        }
    }
    for (let num of arr2){
        if (freqCounter2[num]){
            freqCounter2[num]++
        } else {
            freqCounter2[num] = 1
        }
    }
    // freqCounter1
    // freqCounter2

    for (let num in freqCounter1){
        if (!(num ** 2 in freqCounter2)){
            return false 
        }

        if (freqCounter2[num ** 2] !== freqCounter1[num] ){
            return false 
        }
    }
    return true 
}


freqCounter([1, 2, 3], [1, 4, 9])
























// function freqCounter(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     let freqCounter1 = {}
//     let freqCounter2 = {}

//     for (val of arr1) {
//         freqCounter1[val] ? freqCounter1[val]++ : freqCounter1[val] = 1
//     }
//     for (val of arr2) {
//         freqCounter2[val] ? freqCounter2[val]++ : freqCounter2[val] = 1
//     }

//     for (let key in freqCounter1){ 
//         if (!(key ** 2 in freqCounter2)){
//             return false
//         }
//         if (freqCounter2[key ** 2] !== freqCounter1[key]){
//             return false 
//         }
//     }

//     freqCounter1
//     freqCounter2

// }

// freqCounter([1, 2, 3], [1, 4, 9])