Math.round(4.5)
Math.ceil(4.001)
Math.floor(4.9999)
Math.PI
Math.trunc(4.922136)

Math.sqrt(64)
Math.pow(5,2)


Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);
Math.log(10);
Math.log2(8);

Math.log10(1000)

Math.sign(-3)
Math.sign(3)
Math.sign(0)

Math.cbrt(27)

let a = Math.abs(7.25);
let b = Math.abs(-7.25);
let c = Math.abs(null);
let d = Math.abs("Hello");
let e = Math.abs(2-3);

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);



// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  
  getRndInteger(0,10)