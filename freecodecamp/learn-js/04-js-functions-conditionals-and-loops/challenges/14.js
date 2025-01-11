function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2)
}

let result

result = basicOp('+', 4, 7)
console.log(result)

result = basicOp('-', 4, 7)
console.log(result)
