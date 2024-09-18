// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for (let i in myObj.cars) {
//   x += "<h2>" + myObj.cars[i].name + "</h2>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
//   }
// }

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//   };
//   person.name = function() {
//     return this.firstName + " " + this.lastName;
//   };

  
//   person.name()

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let txt = "";
  for (let x in person) {
  txt += person[x] + " ";
  };

  
  