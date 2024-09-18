// function anagramChecker(string1, string2) {
//     return helperString(string1) === helperString(string2)
// }

// function helperString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
//     // return str.toLowerCase().split("").sort().join("")
// }

// function anagramCheckerTwo(string1, string2) {
//     let charMapOne = buildCharacterMap(string1)
//     let charMapTwo = buildCharacterMap(string2)
//     if (Object.keys(charMapOne).length !== Object.keys(charMapTwo).length) {
//         return false
//     }
//     for (let char in charMapOne) {
//         if (charMapOne[char] !== charMapTwo[char]) {
//             return false
//         }
//     }
//     return true
// }



// function buildCharacterMap(str) {
//     let charMap = {}
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         if (charMap[char]) {
//             charMap[char]++
//         } else {
//             charMap[char] = 1
//         }
//     }
//     return charMap
// }


// anagramChecker("Hello", "hello")
// helperString("Hello There _a223")
// "Hello ".replace(" ", "") == "Hello"

// buildCharacterMap("Hello")
// buildCharacterMap("Hello")

// anagramCheckerTwo("Hello", "Hello")



