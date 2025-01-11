// return sum of all positive values in an array

function positiveSum (arr) {
  return arr.filter((x) => x > 0).reduce((a,b) => a + b, 0)
}

let result

result = positiveSum([1,2,3,4,5])
console.log(result)

result = positiveSum([1,-2,3,4,5])
console.log(result)

result = positiveSum([])
console.log(result)

result = positiveSum([-1,-2,-3,-4,-5])
console.log(result)

result = positiveSum([-1,2,3,4,-5])
console.log(result)
