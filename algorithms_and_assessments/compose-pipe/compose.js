const add5 = x => x + 5;
const double = x => x * 2;
const square = x => x * x;

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// const composedFunction = compose(square, double, add5);
// console.log(composedFunction(2)); // Output: 196 (2 + 5 = 7, 7 * 2 = 14, 14 * 14 = 196) 

const pipedFunction = pipe(add5, double, square);
console.log(pipedFunction(2)); // Output: 98 (2 + 5 = 7, 7 * 2 = 14, 14 * 7 = 98) 