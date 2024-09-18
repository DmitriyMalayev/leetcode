// // function foo() {
// //   let x = (y = 0);
// //   x++;
// //   y++;
// //   return x;
// // }
// // console.log(foo(), typeof x, typeof y);


// // function foo() {
// //   return (;

// //   )
// //   {
// //     message: "Hello World";
// //   };
// // }

// // foo()

// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };

// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());


// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);

// console.log([[[[[[[10]]]]]]].valueOf().toString()) 

// Boolean([0])
// Boolean(Number([0].valueOf().toString()))
// console.log(Boolean(0));
// if ([0]) {
//   console.log("I'm True");
// } else {
//   console.log("I'm False");
// }

// function delay() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

// async function delayedLog(item) {
//   await delay();
//   console.log(item);
// }

// async function process(array) {
//   for (const item of array) { 
//     await delayedLog(item);
//   }
//   console.log("Process completed!");
// }

// // Call the process function with the array
// process([1, 2, 3, 5]); 


// console.log(
//   JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
// );
// console.log(
//   JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
// );

// class A {
//   constructor() {
//     console.log(new.target.name);
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//   }
// }

// new A();
// new B();


// function add(item) {
//   let items = []
//   items.push(item);
//   return items;
// }

// console.log(add("Orange"));
// console.log(add("Apple"));



// function Person(name) {
//   this.name = name
// }

// Person.prototype.walk = function () {
//   return this.name;
// };

// Person.run = function () {
//   return this.name 
// };

// let user = new Person("a");
// let walk = user.name;
// console.log(walk);

// let run = Person.run;
// console.log(run());



// let zero = new Number(0);

// if (zero) {
//   console.log("If");
// } else {
//   console.log("Else");
// }

// let msg = "Good morning!!"

// msg.name = "John"

// console.log(msg.name);

// Boolean("aaasd")

// console.log("First line")[("a", "b", "c")].forEach((element) => console.log(element));
// console.log("Third line");

// var x = 5 
// {
//   console.log(x); // ReferenceError
//   x = 4
//   // const x = 2;
// }
// console.log(x)


// var currentCity = "New York"

// var changeCurrentCity = function(){
//   console.log(currentCity)   //prints New York
// };

// changeCurrentCity()


// function name(){
//   var name = "Dmitriy"
// }

// console.log(name)

// var expressionOne = function functionOne() {
//   console.log("functionOne");
// };
// functionOne();


// let message = "Hello World!";
// message[0] = "J";
// console.log(message);

// let name = "John";
// name = name + " Smith";
// console.log(name);

// const origTarget = {a: "toy", b:"boy"}
// const origSource = {b: "bar", c: "car"}


// const returnedTarget = Object.assign(origTarget, origSource)

// returnedTarget.a = "apple"
// returnedTarget
// target
// returnedTarget === target
// const alsoReturnedTarget = Object.create(target)


// const source = {
//     b: "bar",
//     c: "car"
// }

// const target = Object.create(source)
// target.b = "desk"
// target 
// source
// target === source





// const object1 = {
//   property1: 42,
// };

// const descriptors1 = Object.getOwnPropertyDescriptors(object1);
// const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');


// let example = new Object({a: "one", b: "two"})
// let example2 = {}

// Object.getPrototypeOf(example)
// Object.getPrototypeOf(example2) 

// const person = {
//   isHuman: false,
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };

// const me = Object.create(person);

// Object.getPrototypeOf(person) 


// let a = Object.create(null)
// let b = Object.getPrototypeOf(a)



// let regexp = /Hello(\d?)/g;
// let greeting = "Hello1Hello2Hello3";

// let greetingList = [...greeting.matchAll(regexp)];

// console.log(greetingList[0]); //Hello1
// console.log(greetingList[1]); //Hello2
// console.log(greetingList[2]); //Hello3
// console.log(false + true)

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// a 
// b 

// var myPrimitive = 30 
// var myNonPrimitive = {}

// function isPrimitive(val){
//     return Object(val) !== val 
// }


// console.log(isPrimitive(myPrimitive))
// console.log(isPrimitive(myNonPrimitive))

// var a = 100;
// function createFunction() {
//   var a = 200;
//   return new Function("return a;");
// }
// console.log(createFunction()()); // 100



// var a = 100;
// function createFunction() {
//   var a = 200;
//   return function func() {
//     return a;
//   };
// }
// console.log(createFunction()()); // 200 

// void (function (dt) {
//   console.log(dt.toLocaleTimeString());
// })(new Date());

// void (function (dt) {
//   console.log(dt.toLocaleTimeString());
// })(new Date()); 


// const array1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// const result = array1.reduceRight((accumulator, currentValue) =>
//   accumulator.concat(currentValue),
// );

// console.log(result);
// // Expected output: Array [4, 5, 2, 3, 0, 1]
// console.log([0] == false);
// if ([0]) {
//   console.log("I'm True");
// } else {
//   console.log("I'm False");
// }


// console.log(Number([0].valueOf()))
let numbers = [1, 2, NaN, 4];
console.log(numbers.indexOf(NaN));