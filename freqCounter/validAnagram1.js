function validAnagram(word1, word2) {
    let freqCounter1 = {}
    let freqCounter2 = {}

    for (let char of word1) {
        if (freqCounter1[char]) {
            freqCounter1[char]++
        } else {
            freqCounter1[char] = 1
        }
    }
    for (let char of word2) {
        if (freqCounter2[char]) {
            freqCounter2[char]++
        } else {
            freqCounter2[char] = 1
        }
    }

    for (let i in freqCounter1) {
        if (freqCounter1[i] !== freqCounter2[i]) {
            return false
        }
    }
    for (let i in freqCounter2) {
        if (freqCounter1[i] !== freqCounter2[i]) {
            return false
        }
    }
    return true
}



validAnagram("racecar", "racecars")