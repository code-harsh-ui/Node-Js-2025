# [fsModule.js](../../fsModule/fsModule.js) Documentation

## <p style="color:deepskyblue">What Is the fs Module?</p>

- The File System (`fs`) module allows Node.js to interact with the file system.

- Used to create, read, update, delete files and directories.

### <p style="color:coral">1. Writing a File</p>

```js
const fs = require("fs");
const path = require("path");

const filename = "test.txt";
const filePath = path.join(__dirname, filename);

const writeFile = fs.writeFileSync(
  filePath,
  "This file is created using writeFile method updated",
  "utf-8"
);

console.log(writeFile); // undefined (no return value)
```

### <p style="color:lightblue">Explanation:</p>

#### `fs.writeFileSync(filePath, data, encoding)`

- **filePath** → location of the file.
- **data** → text/content to write.
- **encoding** → "utf-8" ensures proper string encoding.

`writeFileSync` creates or overwrites the file.

The method is synchronous, meaning it blocks code execution until the file is written.

It returns nothing (`undefined`), so logging it will show `undefined`.

<p style="color:yellow; font-size:1.7rem; font-weight:bold;">Why Use Path with fs?</p>

- `path.join(__dirname, filename)` ensures the file is created **relative to the current directory**, not just anywhere.
- Makes code **cross-platform safe** (Windows/Linux/macOS).

### <p style="color:coral">2. Reading a File</p>

```js
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);
```

or

```js
const readFile = fs.readFileSync(filePath);
console.log(readFile.toString());
```

**Explanation:**

- `fs.readFileSync` reads file content.
- With `"utf-8"`, it directly returns text.
- Without encoding, it returns a `Buffer`, so we use `.toString()`.

### <p style="color:coral">3. Appending Data</p>

**Explanation:**

```js
const appendFile = fs.appendFileSync(
  filePath,
  "\nThis is a new line added using appendFileSync",
  "utf-8"
);

console.log(appendFile); // undefined
```

- `fs.appendFileSync` adds new content at the **end of the file**.
- If the file does not exist, it will be created.

### <p style="color:coral">4. Renaming a File</p>

```js
const newUpdatedFileName = "updateTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);

const rename = fs.renameSync(filePath, newFilePath);
console.log(rename); // undefined
```

### <p style="color:coral">5. Deleting a File</p>

```js
const fileDelete = fs.unlinkSync(filePath);
console.log(fileDelete); // undefined
```

**Explanation:**

- `fs.unlinkSync` deletes the file from the system.
- Once deleted, the file cannot be accessed again unless recreated.

### <p style="color:yellow; font-weight:bold;"> Learning: `fs` Handles Full File Lifecycle</p>

- **Create/Write** → `fs.writeFileSync()`
- **Read** → `fs.readFileSync()`
- **Append** → `fs.appendFileSync()`
- **Rename** → `fs.renameSync()`
- **Delete** → `fs.unlinkSync()`
