# REPL in Node.js

- <span style="color:lightblue; font-weight:bold;"> REPL stands for Read-Eval-Print Loop</span>. It is a simple, interactive shell that comes bundled with Node.js. Developers can use REPL to quickly test `JavaScript/Node.js` code snippets, debug code, and explore APIs without creating a file.

- **Read**: Reads the user input.

- **Eval**: Evaluates the input (runs the code).

- **Print**: Prints the result.

- **Loop**: Repeats the cycle.

You can start REPL simply by typing `node` in your terminal.

### Examples:

1. Basic Arithmetic

   ```bash
   $ node
   > 5 + 10
   15
   ```

2. Variables

   ```bash
       > let x = 20
       undefined
       > x * 2
       40
   ```

3. Multi-line Code

   ```bash
        > function add(a, b) {
        ... return a + b
        ... }
        undefined
        > add(5, 7)
        12
   ```

4. Using Node.js Modules

   ```bash
        > const fs = require("fs")
        undefined
        > fs.readdirSync(".")
        [ 'file1.js', 'file2.txt', 'index.html' ]
   ```

- #### <p style="color:yellow;">**REPL** is very useful for quick **experiments**, **debugging**, and **learning Node.js** without running a full program.</p>
