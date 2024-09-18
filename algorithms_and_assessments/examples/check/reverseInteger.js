function reverseInteger(n){
    let reversedString =  parseInt(n.toString().split("").reverse().join(""))
    return reversedString * Math.sign(n)
}


reverseInteger(123)