//No.1
const myBoolean=true;
console.log(myBoolean);
//NO.2
const myString='Hello world!';
console.log(myString);
//no.3
const firstNumber =20;
console.log(firstNumber);
//No.4
let secondNumber=40;
console.log(secondNumber);
//No.5
secondNumber=80;
console.log(secondNumber);
//No.6
const myArray=[myBoolean,myString];
console.log(myArray);
//No.6
const myObject={firstProperty:myArray,sumProperty:firstNumber+secondNumber};
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);