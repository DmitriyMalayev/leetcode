let paras = document.querySelectorAll("p")
let obj = {
    id: crypto.randomUUID(),
    name: "James Bond", 
    email: "jamesbond@gmail.com" 
}

console.log(typeof paras)
console.log(paras.constructor.name) //NodeList. 

paras.forEach((p) => {
    console.log(p.innerHTML)
})

//A NodeList is an array like object but it is not an array. It doesn't have all the methods that an array has. 
//It has forEach but doesn't have a map method. 
//constructor is what was the function used to create the object 


let a1 = Array.from(paras, (p) => p.localName)
let a2 = Array.from(obj)
//Create an iterator for an object

obj[Symbol.iterator] = function(){
    let iterableProps = ["id", "name", "email"]
    let index = 0 
    return { //Iterator
        next(){  //This is what is called when using forEach, map, for of loop
            let value = obj[iterableProps[index]]
            index++ 
            return {
                value, 
                done: index === iterableProps.length + 1
            }
        }
    }
}
let a3 = Array.from(obj)
console.log(a3) 

let findEmail = Array.from(obj, (val) => val.includes("@") ? null : val)

//Array.from(obj, map function, what do you want to use as the value of this)
//With a regular function "this" refers to the obj 

let manageThis = Array.from(obj, function(item, index){
    if (this[index]){
        return {[item]: this[index].innerText.split(" ").shift()}
    } else {
        return item;
    }
}, 
paras 
)

console.log(manageThis) 