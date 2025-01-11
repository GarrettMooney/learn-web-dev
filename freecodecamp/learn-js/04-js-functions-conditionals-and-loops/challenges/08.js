// find the smallest intger in the array

// Beginner solution
class SmallestIntegerFinder {
  findSmallestInt(arr) {
    let smallestNumber;

    for (let i = 0; i < arr.length; i++) {

      const element = arr[i];

      if (i === 0) {
        smallestNumber = element;
      }

      if (element < smallestNumber) {
        smallestNumber = element;
      }
    }

    return smallestNumber
  }
}

let sif = new SmallestIntegerFinder()
let result = sif.findSmallestInt([78, 56, 232, 12, 8]);
console.log(result)


// Clever solution
class CleverSmallestIntegerFinder {
  findSmallestInt(arr) {
    //console.log(arr)
    //console.log(...arr)
    return Math.min(...arr)
  }
}

sif = new CleverSmallestIntegerFinder()
ressult = sif.findSmallestInt([78, 56, 232, 12, 8]);
console.log(result)
