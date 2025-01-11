function myFunction() {
  return 20;
}

const myObj = {
  prob1: 50,
  prop2: myFunction
}

console.log(myObj.prop1)
console.log(myObj.prop2())
