function validAnagram(word1, word2) {
    if (word1.length !== word2.length){
        return false 
    }
    
    let freqCounter1 = {}
    let freqCounter2 = {}
    
    for (let char of word1){
        if(freqCounter1[char]){
            freqCounter1[char]++ 
        } else {
            freqCounter1[char] = 1 
        }
    }
    
    for (let char of word2){
        if(freqCounter2[char]){
            freqCounter2[char]++ 
        } else {
            freqCounter2[char] = 1 
        }
    }
    
    for (let key in freqCounter1){
        if (key in freqCounter2){
            return false 
        }
        
        if (freqCounter1[key] !== freqCounter2[key]){
            return false 
        }
    }
    return true 
}




validAnagram("abc", "cba")


