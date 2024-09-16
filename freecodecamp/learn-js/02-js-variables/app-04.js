// const vs let vs var

const variable1 = 10;
let variable2 = 10;
var variable3 = 10;  // deprecated

// var can be redeclared
var myVariable = 10;
var myVariable = 20;

// const can NOT be redeclared
const anotherVariable = 10;
// const anotherVariable = 20;

// let is used when we expect the value to change
let counter = 0;
console.log(counter);
counter = counter + 1;
console.log(counter);
counter++;
console.log(counter);
