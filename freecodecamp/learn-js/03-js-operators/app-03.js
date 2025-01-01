// comparison operators

// ternary operator
const result = 20 === 20 ? 'values match' : 'values do not match';
console.log(result);

// same as above
let resultVariable;
if (20 === 20) {
    resultVariable = 'values match';
} else {
    resultVariable = 'values do not match';
}
console.log(resultVariable);
