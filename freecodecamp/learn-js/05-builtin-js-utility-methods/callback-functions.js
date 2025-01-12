// callback functions
function myCallback (someNumber) {
    return 2 * someNumber
}

function mainFunction (randomNumber, shouldCall, callback) {
    let result = randomNumber

    if (shouldCall) {
        result = callback(randomNumber)
    }

    return result
}

console.log(mainFunction(20, false, myCallback))
console.log(mainFunction(20, true, myCallback))
console.log(mainFunction(20, true, (x) => 3 * x))
