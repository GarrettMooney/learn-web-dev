const expression1 = 100 % 50; // 0
const expression2 = 100 / 50; // 2
const expression3 = expression1 < expression2; // 0 < 2
const expression4 = expression3 && 300 + 5 === 305; // true && true
const expression5 = !expression4; // false

console.log(expression5);
