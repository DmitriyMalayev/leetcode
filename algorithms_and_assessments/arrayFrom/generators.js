/****************************************
ES6 Iterators and Generators
Arrays, Strings, Maps, Sets, NodeLists - built-in iterators
{Object} => Iterator => Generator

function*  => means we're building a generator 
yield => keyword pauses a generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. It can only be used directly within the generator. 
  
****************************************/
let log = console.log;
let characters = ['Finn','Poe', 'Rey', 'Kylo', 'Luke', 'Leia']

function* genny(){
    let i = 0;

    yield "a"
    
    yield characters[i];
    i++;
    yield characters[i];
    i++;
    yield characters[i];
    i++;
    yield characters[i];
    i++;
    yield characters[i];
    i++;
    yield characters[i];
    i++;
    yield characters[i];
    i++;
    yield characters[i];
}

let iter = genny();
//log(iter)    Generator 
//log(iter.next());   {value: "a", done:false} 
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());


let starwars8 = {
    title: 'The Last Jedi',
    director: 'Rian Johnson',
    year: 2017,
    boxOffice: '1.3B'
}


let count = -1;
let SW8 = {
    [Symbol.iterator]: function(obj){
        return {
            next: ()=>{
                count++;
                switch(count) {
                    case 0:
                        return {
                            value: obj.title, 
                            done: false}
                    case 1:
                        return {
                            value: obj.year,
                            done: false
                        }
                    case 2:
                        return {
                            value: obj.director,
                            done: false
                        }
                    case 3 :
                        return { value: undefined, done: true}
                    default:
                        return { value: undefined, done: true}
                }
            }
        }
    }
}

let data = SW8[Symbol.iterator](starwars8);
log( data.next() );
log( data.next() );
log( data.next() );
log( data.next() );
log( data.next() );

//
//for(let p of starwars8){
//    for of loops are using the .next( ) method behind the scenes
//}