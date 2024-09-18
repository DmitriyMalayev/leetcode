let bob = function(num, str){
    console.log("bob", num, str, this)
    return true 
}

let bill = {
    name: "Bill Murray", 
    movie: "Lost in Translation",
    myMethod: function(fn){
        fn()
    }
}


bob(1, "Hello")