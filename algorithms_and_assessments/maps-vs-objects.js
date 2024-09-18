let a = {"name":"Sherlock"}
let b = {"name": "Watson"}
let people = {}

people[a] = "Detective"
people[b] = "Detective"

console.log(people[a], people[b])


// Can't use Objects as keys for other objects 

let characters = new Map()
characters.set(a, "Detective")
characters.set(b, "Doctor")



for (let [key, value] of characters){
    console.log(`${key} = ${value}`)
}





