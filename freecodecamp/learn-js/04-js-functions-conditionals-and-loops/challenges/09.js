// find the sum of every number from 1 to num
// number will always be a positive integer > 0


function summation(num) {
  let acc = 1
  if (num == 1) {
    return acc
  }
  while (num > 1) {
    acc += num
    num -= 1
  }
  return acc
}

let result

result = summation(1)
console.log(result)

result = summation(8)
console.log(result)
