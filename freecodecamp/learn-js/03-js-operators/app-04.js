// logical operators

let check;

// &&
check = 20 === 20 && 10 === 10;
console.log(check); // true

check = 20 === 20 && 10 === 12;
console.log(check); // false

// ||
check = 20 === 20 || 10 === 12;
console.log(check); // true

check = 20 === 18 || 10 === 12;
console.log(check); // false

// !
check = !(20 === 20)
console.log(check); // false

// realistic example
const isUserLoggedIn = true;
const doesUserHavePermission = false;
const canUserAccess = isUserLoggedIn && doesUserHavePermission;
console.log(canUserAccess); // false

// immediately invoked function expression (IIFE)
const result = (() => {
    return 20;
})();
check = result === 20;
console.log(check); // true
