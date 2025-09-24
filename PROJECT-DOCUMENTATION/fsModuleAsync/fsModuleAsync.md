# [fsModule.js](../../fsModuleAsync/fsModuleAsync.js) Documentation

## <p style="color:deepskyblue">What Is the fs Module?</p>

- The File System (`fs`) module allows Node.js to interact with the file system.

- Used to create, read, update, delete files and directories.

### <p style="color:coral">1. Writing a File</p>

```js
const fs = require("fs");
const path = require("path");

const filename = "test.txt";
const filePath = path.join(__dirname, filename);

fs.writeFile(
  filePath,
  "This file is created using writeFile async method",
  "utf-8",
  (err) => {
    if (err) throw err;
    console.log("File written successfully!");
  }
);
```

**Explanation:**

- `fs.writeFile` creates/overwrites a file.

- Takes a **callback** that runs after completion.

- Errors must be handled inside the callback.

### <p style="color:coral">2. Reading a File</p>

```js
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File Content:", data);
});
```

**Explanation:**

- `fs.readFile` reads file content without blocking.
- Always pass `"utf-8"` to get readable text, otherwise you’ll get a `Buffer`.

### <p style="color:coral">3. Appending Data</p>

```js
fs.appendFile(
  filePath,
  "\nThis is a new line added using appendFile async method",
  "utf-8",
  (err) => {
    if (err) throw err;
    console.log("Data appended successfully!");
  }
);
```

**Explanation:**

- `fs.appendFile` adds content at the end of a file.
- If the file does not exist, it will be created automatically.

### <p style="color:coral">4. Renaming a File</p>

```js
const newUpdatedFileName = "updateTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);

fs.rename(filePath, newFilePath, (err) => {
  if (err) throw err;
  console.log("File renamed successfully!");
});
```

**Explanation:**

- `fs.rename` changes the name (or location) of a file.
- Runs asynchronously, so log message only after completion.

### <p style="color:coral">5. Deleting a File</p>

```js
const filename = "updateTest.txt";
const newFilePath = path.join(__dirname, filename);

fs.unlink(newFilePath, (err) => {
  if (err) throw err;
  console.log("File deleted successfully!");
});
```

**Explanation:**

- `fs.unlink` removes the file permanently.
- Always check for errors before assuming deletion worked.

### <p style="color:yellow; font-weight:bold;">Learning: Async fs Methods Are Non-Blocking</p>

- **Sync methods** → simple but block execution.

- **Async methods** → use callbacks, better for scalable apps.

**For modern apps, prefer async/await with fs.promises instead of callbacks.**
