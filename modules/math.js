//* How to Use Consistent Exports Without Overwriting

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

//* overwriting
// module.exports = add;
// module.exports = multiply;

//* exporting individually
// module.exports.add = add;
// module.exports.multiply = multiply;

//* exporting multiple functions
module.exports = { add, multiply };
