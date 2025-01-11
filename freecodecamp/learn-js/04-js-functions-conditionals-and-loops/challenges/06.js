// is n divisible by x and y?

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

// print
let result

result = isDivisible(3,3,4);
console.log(result) // false

result = isDivisible(12,3,4);
console.log(result) // true

result = isDivisible(8,3,4);
console.log(result) // false

result = isDivisible(48,3,4);
console.log(result) // true
