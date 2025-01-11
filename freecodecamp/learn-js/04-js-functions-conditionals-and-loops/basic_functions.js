// classic function definition
function myFunction() {
  console.log('something');
}

// anonymous function assigned to a variable
const anotherFunction = function () {
  console.log('another thing');
}

// arrow function
const arrowFunction = () => {
  console.log('i am an arrow function');
}

// main
console.log(typeof anotherFunction)
myFunction()
anotherFunction()
arrowFunction()
