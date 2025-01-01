// conditionals
const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber;

// if
if (jsExpression) {
  console.log('this expression is true');
}

// if-else
if (jsExpression) {
  console.log('this expression is true');
} else {
  console.log('this expression is false');
}

// if, else if, else
if (jsExpression) {
  console.log('this expression is true');
} else if (firstNumber > 0) {
  console.log('the expression is false, but the first number is positive');
} else {
    console.log('this expression is false, and firstNumber is <= 0');
}

// one-liner if
if (jsExpression) console.log('this expression is true');
