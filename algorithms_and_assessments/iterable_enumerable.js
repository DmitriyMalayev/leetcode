
// for of vs. for in loops
// Iterable vs. Enumerable 

//for in is looking for all of the enumerable properties (not the values) of the object and loops through them 

let names = ["Gandalf", "Bilbo", "Aragorn", "Gimli"]
names.elf = "Legolas"

Object.defineProperty(
    names, "ent", { value: "Treebeard", enumerable: true }
)

let middleEarth = {
    "towns": ["Hobbiton", "Rivendell"],
    "races": ["Elves", "Hobbits", "Men"]
}

middleEarth.creator = "JRR Tolkien"

Object.defineProperty(middleEarth, "age", {value: "3rd", enumerable: false})

for (let p in names){
    console.log("in names: ", p)
}

for (let p in middleEarth){
    console.log("in middleEarth", p)
}

//Iterators 
//The for of loop is designed to use the iterators. An iterator is another object that's attached to the array that tells some other function how to access all the different values that are inside of it.
//Arrays, Strings, Sets, Maps, NodeLists, all have built in Iterators. Object do not (must be custom made) 


// for (let p of names){
//     console.log("in names: ", p)
// }

// for (let p of middleEarth.towns){
//     console.log("in middleEarth", p)
// }


// code here can use carName as a global variable

function myFunction() {
    let carName = "Volvo";
}
myFunction();
"I can display " + carName;