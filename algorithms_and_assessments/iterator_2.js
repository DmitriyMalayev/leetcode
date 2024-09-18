/**
This second version has two objects - `Obj1` and `Obj2`
The generator `myGenerator`, is put in the prototype chain for both objects
This way we can call the [Symbol.iterator] method on each object to give them each their own iterator.
The new version of the Iterator also checks for the existence of the property, to make this more generic. It will
display a message about missing properties.
**/
let log = console.log;

let Obj1 = {
  title: 'The Last Jedi',
  director: 'Rian Johnson',
  year: 2017,
};

let Obj2 = {
  title: 'The Hobbit',
  director: 'Peter Jackson',
  boxOffice: '1.017B',
};

let myGenerator = {
  [Symbol.iterator]: function () {
    let count = -1; //reset the count
    return {
      next: () => {
        count++;
        switch (count) {
          case 0:
            return {
              value: this.title ? this.title : 'No title property',
              done: false,
            };
          case 1:
            return {
              value: this.year ? this.year : 'No year property',
              done: false,
            };
          case 2:
            return {
              value: this.director ? this.director : 'No director property',
              done: false,
            };
          default:
            return { value: undefined, done: true };
        }
      },
    };
  },
};

Object.setPrototypeOf(Obj1, myGenerator);
Object.setPrototypeOf(Obj2, myGenerator);

let data1 = Obj1[Symbol.iterator](); //create the iterator for Obj1
//this sets count to -1
for (let prop of Obj1) {
  log(prop);
}
log('\n\n');

let data2 = Obj2[Symbol.iterator](); //create the iterator for Obj2
//this sets count to -1 again
for (let prop of Obj2) {
  log(prop);
}