// function capitalizeWords(str){
//     let words = []
//     for (let word of str.split(" ")){
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return words.join(" ")
// }

// capitalizeWords("hello there")

function capitalizedWordsTwo(str) {
    let words = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            words += str[i].toUpperCase()
        } else {
            words += str[i]
        }
    }
    return words
}

capitalizedWordsTwo("hello there")