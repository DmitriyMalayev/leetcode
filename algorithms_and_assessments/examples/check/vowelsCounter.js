function vowelsCounter(word) {
    let count = 0
    let array = []
    for (letter of word) {
        if (letter.match(/[aeiou]/)) {
            count += 1
            array.push(letter)
        }
    }
    return count
}

vowelsCounter("hello")