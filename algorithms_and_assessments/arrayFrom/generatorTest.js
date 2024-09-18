function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
const genObj = myGenFunc(); 

genObj.next()
genObj.next()
genObj.next()
genObj.next()

const myGenFunc2 = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const genObj2 = myGenFunc2();

genObj2.next()
genObj2.next()
genObj2.next()
genObj2.next()


const myObj = {
  *myGeneratorMethod() {
    yield 1;
    yield 2;
    yield 3;
  },
};
const genObj3 = myObj.myGeneratorMethod();
genObj3.next()
genObj3.next()
genObj3.next()


class MyClass {
  *myGeneratorMethod() {
    yield 1;
    yield 2;
    yield 3;
  }
}
const myObject = new MyClass();

const genObj4 = myObject.myGeneratorMethod();
genObj4.next()
genObj4.next()
genObj4.next()


const SomeObj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log(Array.from(SomeObj)); // [ 1, 2, 3