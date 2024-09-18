const url = new URL("https://example.com?foo=1&bar=2");
const params1 = new URLSearchParams(url.search); 
const params1a = url.searchParams;



const arrayLike = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(arrayLike)); 

for (a in arrayLike){
    console.log(a, arrayLike[a])
}

Object.entries(arrayLike)

let empty = {}
Object.entries(empty)
let b = empty.constructor
Boolean(Object.entries(empty).length === 0 && empty.constructor === Object )
// ({} === Object) 