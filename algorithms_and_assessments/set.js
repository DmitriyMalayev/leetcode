// const letters = new Set(["a", "b", "c"])
// const alsoLetters = new Set()
// alsoLetters.add("a")
// alsoLetters.add("b")
// alsoLetters.add("c")

// const letter = "d"

// alsoLetters.add(letter)


// alsoLetters




// let sample = new Set();
// sample.add("Hello");
// sample.add("1")
// sample.add("Bye")
// sample.add("@");
// console.log(sample);
// console.log(sample.has("Hello"))



// let text = "";
// for (const x of sample) {
//   text += x;
// }

// text


// typeof sample

// const letters = new Set(["a","b","c"]);
// let newText = ""
// letters.forEach((a) => newText += a)
// letters
// newText



// List all Elements
// let text = "";
// letters.forEach (function(value) {
//   text += value + "<br>";
// })




// const letters = new Set(["a","b","c"]);

// // Create an Iterator
// const myIterator = letters.values();

// // List all Elements
// let text = "";
// for (const x of myIterator) {
//   text += x + "<br>";
// }




// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}

for (const entry of letters) {
    text += entry;
  }