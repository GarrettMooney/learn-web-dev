// get the mean of an array

function getAverage (marks) {
  const n = marks.length
  const sum = marks.reduce((a,b) => a + b, 0)
  return Math.floor(sum / n)
}

let result

result = getAverage([2,2,2,2])
console.log(result)

result = getAverage([1,2,3,4,5])
console.log(result)

result = getAverage([1,1,1,1,1,1,1,2])
console.log(result)
