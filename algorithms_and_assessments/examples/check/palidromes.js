function palidromeOne(str) {
    return str.split("").every((char, index) => {
        return char === str[str.length - index - 1]
    })
}

function palidromeTwo(str) {
    let reversed = str.split("").reverse().join("")
    return str === reversed
}

function palidromeThree(str) {
    let len = str.length
    let start = str.substring(0, Math.floor(len / 2)).toLowerCase()
    let end = str.substring(len - Math.floor(len / 2)).toLowerCase()
}

palidromeOne("racecar")
palidromeTwo("madam")
palidromeThree("hannah")

