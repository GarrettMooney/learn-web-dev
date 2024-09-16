const variable1 = 10;
const variable2 = 'some value';
const variable3 = false;

const number1 = '10';
const number2 = 20;

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);

// Implicit type conversion
console.log(variable1 + variable2);
console.log(typeof (variable1 + variable2));
console.log(number1 + number2);
console.log(typeof (number1 + number2));

// Explicit type conversion
console.log(Number(number1) + number2);
console.log(typeof (Number(number1) + number2));
