function maxChars(str) {
    let charMap = {}
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    let max = 0
    let letter = ""

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            letter = char
        }
    }
    return letter
}

maxChars("hello")