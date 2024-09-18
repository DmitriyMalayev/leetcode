// Create a Map  
// Passing an Array to new Map()  
// Create a Map and use Map.set()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

// Create a Map
const alsoFruits = new Map();

// Set Map Values
alsoFruits.set("apples", 500);
alsoFruits.set("bananas", 300);
alsoFruits.set("oranges", 200);



fruits
alsoFruits

let text = ""
fruits.forEach((value, key) => {text += key + " " + value})
text


let textEntries = ""
for (const x of fruits.entries()){
    textEntries += x + " "
}
textEntries

let newArray = new Set()
for (const x of fruits.keys()){
    newArray.add(x)
}

let newMap = new Map()
for (const x of fruits.keys()){
    newMap.set(x,100)
}
newMap.size
newArray.size

let newObject = {fruit: 1, color:2}
newObject.size


// alsoFruits.set("apples", 300)

// alsoFruits
// alsoFruits.get("apples")

// typeof alsoFruits 
// alsoFruits instanceof Map 
// fruits instanceof Map 

// fruits.has("apples")



// fruits.delete("apples")
// fruits

// fruits.clear()
// fruits 


/*
Objects vs. Maps

Object
  Not directly iterable
  Do not have a size property
  Keys must be strings or symbols
  Keys are not well ordered 
  Have default keys  

Maps 
  Directly iterable
  Have a size property
  Keys can be of any data type
  Keys are ordered by insertion
  Do not have default keys 
*/
