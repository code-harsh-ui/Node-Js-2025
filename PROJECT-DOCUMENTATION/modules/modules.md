# What are Modules in Node.js?

In Node.js, modules are like small files or blocks of code that you can reuse in different parts of your project.

They help you:

- **Organize code** (instead of writing everything in one file).
- **Reuse code** (no need to repeat the same logic).
- **Share code** (use built-in or third-party modules).

---

## Types of Modules

1. **Built-in modules** → Already provided by Node.js (like `fs`, `http`, `path`).
2. **User-defined modules** → Your own custom files.
3. **Third-party modules** → Installed via npm (like `express`, `lodash`).

### <p style="color:coral; font-size:2rem;">Examples with Outputs:</p>

#### <p style="font-size:1.7rem;">1. Built-in Module Example</p>

Using Node.js’ built-in fs (file system) module.

#### <p style="color:lightgreen; font-size: 1.5rem;"> Code in [app.js](/modules/app.js)

```js
const fs = require("fs");

// Write to a file
fs.writeFileSync("test.txt", "Hello from Node.js!");

// Read from the file
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);
```

#### -> Output (in terminal);

```csharp
Hello from Node.js!
```

#### <p style="font-size:1.7rem;">2. User-defined Module Example</p>

#### <p style="color:lightgreen; font-size: 1.5rem;"> Code in [math.js](/modules/math.js)

```js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply }; // exporting multiple functions
```

#### <p style="color:lightgreen; font-size: 1.5rem;"> File in [app.js](/modules/app.js)

```js
const math = require("./math"); // import user module

console.log(math.add(5, 7));
console.log(math.multiply(3, 4));
```

#### -> Output (in terminal);

```js
12;
12;
```

#### <p style="font-size:1.7rem;">3. Third-party Module Example</p>

#### -> Install chalk:

```bash
npm install chalk
```

#### <p style="color:lightgreen; font-size: 1.5rem;"> Code in [app.js](/modules/app.js)

```js
const chalk = require("chalk");

console.log(chalk.green("This text is green!"));
console.log(chalk.blue("This text is blue!"));
```

#### -> Output (in terminal);

```js
(This will print "This text is green!" in green color
 and "This text is blue!" in blue color)

```
