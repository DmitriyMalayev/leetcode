function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else if (i % 3 == 0) {
            console.log("buzzer")
        } else {
            console.log(i, "number")
        }
    }
}
function fizzBuzzReturn(n) {
    let result = ""; // Start with an empty string
    for (let i = 1; i <= n; i++) { // Iterate up to n (inclusive)
      if (i % 15 == 0) {
        result += "fizz\n"; // Add "fizz" and a newline
      } else if (i % 5 == 0) {
        result += "buzz\n";
      } else if (i % 3 == 0) {
        result += "buzzer\n";
      } else {
        result += i + " number\n";
      }
    }
    return result; // Return the built string  
  }
  
  // let output = fizzBuzzReturn(15);
  // console.log(output); 
// console.log(fizzBuzz(15))