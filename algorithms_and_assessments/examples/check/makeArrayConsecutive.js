let randomStatues = [6,2,1,3,8]
let emptyNumbers = []
function makeArrayConsecutive(statues){
    statues.sort((a,b) => {
        return a-b
    })

let min = randomStatues[0]
let max = randomStatues[randomStatues.length -1]
let count = 0 

for (let i =min; i<max; i++){
    if (randomStatues.indexOf(i) === -1){
        count++
    }
}
return count 
}
makeArrayConsecutive(randomStatues)
