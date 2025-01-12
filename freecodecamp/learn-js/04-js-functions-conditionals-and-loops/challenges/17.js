// return an array with each value doubled
// use `.map` method

function double (arr) {
  return arr.map((x) => x * 2)
}

let result = double([1,2,3]);
console.log(result)

result = double([4,1,1,1,4]);
console.log(result)
