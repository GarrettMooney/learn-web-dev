function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}

// prints
let result

result = greet("Jim")
console.log(result)

result = greet("Jane")
console.log(result)

result = greet("Johnny")
console.log(result)
