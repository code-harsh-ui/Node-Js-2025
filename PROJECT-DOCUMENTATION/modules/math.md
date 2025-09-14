# [math.js](../../modules/math.js) Documentation

## <p style="color:deepskyblue">How to Use Consistent Exports Without Overwriting</p>

<p style="color:lightgreen">Used in app.js File</p>

- `math.js` defines some simple math functions like `add`, `subtract`, `divide`, `multiply`.
- The goal is to make these reusable by exporting them so that other files (like `app.js`) can import and use them.

#### Example functions:

```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
```

### How Are We Exporting?

Right now, the code is doing this:

```js
module.exports = add;
module.exports = multiply;
```

### What this does:

- The last line (`module.exports = multiply;`) overrides the previous export.
- This means only `multiply` is actually exported.
- So when you `require("./math")`, you don’t get both functions, only the last one.

### <p style="color:coral; font-size:1.7rem; font-weight: bold;">Correct Way: Export Multiple Functions</p>

Instead of overwriting, we should export them as an **object**:

```js
module.exports = { add, multiply };
```

Now both can be used in `app.js`

```js
const { add, multiply } = require("./math");

console.log(add(5, 7)); // 12
console.log(multiply(3, 4)); // 12
```

### <p style="color:yellow; font-size:2rem; font-weight:bold;">Best Practices for Module Exports</p>

1. **Be consistent** — Always choose one style of exporting.

   - For multiple functions → use an object `{}`.
   - For a single function → directly `module.exports = fn;`

2. **Destructure when importing** — It keeps the code clean and clear.

   ```js
   const { add, multiply } = require("./math");
   ```

3. **Avoid mixing exports** — Mixing leads to overwritten exports and confusion.

## <p style="color:deepskyblue">Exporting Multiple Functions Individually</p>

Instead of exporting all at once, we can attach each function individually to `exports`.

```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

exports.add = add;
exports.multiply = multiply;
```

### <p style="color:lightgreen">Importing Individually in `app.js`</p>

Now, in `app.js`, we can use destructuring:

```js
const { add, multiply } = require("./math");

console.log(add(5, 7)); // 12
console.log(multiply(3, 4)); // 12
```

or using Namespace (prefix with math)

```js
const math = require("./math");

console.log(math.add(5, 7)); // 12
console.log(math.multiply(3, 4)); // 12
```
