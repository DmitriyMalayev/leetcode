// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }

// const myArr = [1, 2, 3, 4, 5, 6,[789], [11]];
// const newArr = myArr.flatMap((x) => x * 2).sort((a,b) => {return a-b});


// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }



// const reduceNumbers = [45, 4, 9, 16, 25];
// let sum = reduceNumbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }


// const reduceRightNumbers = [45, 4, 9, 16, 25];
// let reducedSum = reduceRightNumbers.reduceRight(myRightFunction);

// function myRightFunction(total, value, index, array) {
//   return total + value;
// }


//Array from String

// Array.from("ABCDEFG");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
typeof keys 

for (let a of keys){
    console.log(a)
}


let newFruits = {red: "Apple", orange: "Orange" }
typeof newFruits

for (let a in newFruits){
    console.log(a)
}


const months = ["January", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]; 
