const rules = {
  '+': (a, b) => a + b, 
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

const calculate = (op, a, b) => rules[op](a, b)

console.log(calculate('+', 1, 2)) // 3
console.log(calculate('-', 1, 2)) // -1
console.log(calculate('*', 1, 2)) // 2
console.log(calculate('/', 1, 2)) // 0.5
