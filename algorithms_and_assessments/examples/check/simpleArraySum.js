function simpleArraySum(ar) {
    let sum = 0
    for (let num of ar) {
        sum += num
    }
    return sum
}
function simpleArraySumToo(ar) {
    return ar.reduce((acc, curr) => acc + curr)
}


simpleArraySum([1, 2, 3])

var a = 1
var b = 2
var c = a + b
c