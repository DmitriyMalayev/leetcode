const add5 = x => x + 5;
const double = x => x * 2;
const square = x => x * x;

const composedFunction = compose(square, double, add5);
console.log(composedFunction(2)); // Output: 196 (2 + 5 = 7, 7 * 2 = 14, 14 * 14 = 196) 

