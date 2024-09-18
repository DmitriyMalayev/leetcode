function charCount(str){
    let count = {}
    
    for (let letter of str.match(/[a-z]/gi)){
        count[letter] ? count[letter]++ : count[letter] = 1

    }
    return count 
}

charCount("Hello how are you?")