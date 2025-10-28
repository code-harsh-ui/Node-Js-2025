# [EsModule.js](../../esModule/esModule.js) Documentation

## <p style = "color:deepskyblue;">What is happening here</p>

- Demonstrates how to export and import functions between Javascript files using **Es Modules**.
- Shows both **named exports** and **default exports**.
- Helps keep your code organized by separating logic into different files.

### <p style="color:coral;">Importing Module Functions</p>

```js
import { add, multiply, div, PI } from "./arithmetic.js";
```

#### Explanation

- `import {...} from "..." - Used for **named exports**.
- We import all four exported members: `add`, `multiply`, `div` and `PI`.

#### If you had used `export default multiply`, you'd import like this:

```js
import multiply from "./arithmetic.js";
```

but since we exported multiple items, we use \*\*destructuring import with `{}`.

<p style="color:yellow;">You can use any name if you are importing default from the file.</p>

### <p style="color:coral;">Using Imported Functions</p>

```js
console.log(add(3, 2));
console.log(multiply(3, 2));
console.log(div(3, 2));
console.log(PI);
```

#### Output:

```txt
5
6
1.5
3.214
```

- Each function call comes from `arithmetic.js` and runs independently.
- `PI` is a constant value imported from the same file.

### <p style="color:coral">Function Definitions</p>

```js
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
```

#### Explanation:

- These are **regular Javascript functions** defined in the module.
- They perform simple arithmetic operations.
- `PI` is a constant in the same file.

### <p style="color:coral;">Exporting the Functions and Constants</p>

```js
export { add, multiply, div, PI };
```

#### Explanation:

- This is **named export**: it exports multiple items from the same file.
- Once exported, they can be imported anywhere using destructuring.

```js
import { add, multiply, div, PI } from "./arithmetic.js";
```

### <p style="color:coral;">Different ways to exports</p>

#### Default Export (Single Item):

```js
export default multiply;
```

- Used when you want to export only one thing from a file.
- Then you import it without curly braces:

```js
import multiply from "./arithmetic.js";
```

#### Named Exports (Multiple Items):

```js
export { add, multiply, div, PI };
```

- Used when exporting more than one function or variable.
- You must import them using `{}`:

```js
import { add, multiply, div, PI } from "./arithmetic.js";
```
