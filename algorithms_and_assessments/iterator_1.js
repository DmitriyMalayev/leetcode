/****************************************
ES6 Iterators and Generators
Arrays, Strings, Maps, Sets, NodeLists - built-in iterators
{Object} => Iterator => Generator
****************************************/
let log = console.log;
let characters = ['Finn','Poe', 'Rey', 'Kylo', 'Luke', 'Leia']

//asterisk after the word function generator specifies that it's a generator 
//The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller
function* genny(){  
    let i = 0;
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

//let iter = genny();
//log(iter)
//log(iter.next());
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
//    Objects don't have a built in iterator, if you need me it has to be custom made. 
//}