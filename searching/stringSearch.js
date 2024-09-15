function stringSearch(long, short) {
    let count = 0
    let tempCount = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                tempCount = 0
                break
            } else {
                tempCount++
                if (tempCount === short.length) {
                    count++
                    tempCount = 0
                }
            }
        }
    }
    return count
}

stringSearch("omoooommmmgggomg", "omg")