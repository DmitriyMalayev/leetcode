function validAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }

    let freqCounter = {}

    for (let char of word1) {
        if (freqCounter[char]) {
            freqCounter[char]++
        } else {
            freqCounter[char] = 1
        }
    }

    for (let char of word2) {
        if (!freqCounter[char]) {
            return false
        } else {
            freqCounter[char]--
        }
    }
    return true
    // freqCounter
}


validAnagram("car", "rac")