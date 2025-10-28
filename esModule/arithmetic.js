//* How to Use Consistent Exports Without Overwriting

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const PI = 3.214;

//* Use default if you want to export single item

// export default multiply;

//* And if you want to export multiple item use destructuring exports

export { add, multiply, div, PI };
