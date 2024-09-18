/*
Note: 

NaN => number
Array => Object

date => Objecat
null => Object
undefined => undefined 
variable that hasn't been defined => undefined 

You cannot use typeof to determine if a JS object is an array or a date
The typeof operator is not a variable, it's an operator. Operators don't have a data type. 
typeof operator always returns a string specifying the type of the operand 
*/


// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object" 

// "John".constructor                // Returns function String()  {[native code]}
// (3.14).constructor                // Returns function Number()  {[native code]}
// false.constructor                 // Returns function Boolean() {[native code]}
// [1,2,3,4].constructor             // Returns function Array()   {[native code]}
// {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
// new Date().constructor            // Returns function Date()    {[native code]}
// function () {}.constructor        // Returns function Function(){[native code]}


function isDate(myDate) {
	return myDate.constructor.toString().indexOf("Date") > -1;
  }


  function isArray(myArray) {
	return myArray.constructor === Array;
  }

let car = ""


// In JavaScript null is an object 

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object 


let undefinedPerson = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
undefinedPerson = undefined;   // Now both value and type is undefined


person 
undefinedPerson



typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

const cars = ["Saab", "Volvo", "BMW"];

(cars instanceof Array);
(cars instanceof Object);
(cars instanceof String);
(cars instanceof Number);


// The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).