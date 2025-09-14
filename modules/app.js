//* How to Use Consistent Exports Without Overwriting

//* Overwriting
// const add = require("./math");
// const multiply = require("./math");

//* Importing multiple functions using destructuring method

// const { add, multiply } = require("./math");

// console.log(add(5, 7));
// console.log(multiply(3, 4));

//* Same destructuring method works with individual importing

// const { add, multiply } = require("./math");

// console.log(add(5, 7)); // 12
// console.log(multiply(3, 4)); // 12

//* Or we can use Namespace (prefix with math)

const math = require("./math");

console.log(math.add(5, 7)); // 12
console.log(math.multiply(3, 4)); // 12
