# [fsModule.js](../../fsModuleAsyncPromises/fsModuleAsyncPromises.js) Documentation

## <p style="color:deepskyblue">What Is fs.promises?</p>

- A **modern Promise-based API** for file system operations.
- Replaces callback-style functions with `.then()` and `.catch()` or `async/await`.
- Makes async code cleaner and easier to maintain.

<p style="font-weight:bold; font-size:1.7rem;">Why .then() and .catch()?</p>

- `.then()` ensures clear chaining of multiple asynchronous operations.
- `.catch()` centralizes error handling, making debugging easier.

<p style="color:coral; font-size:1.7rem;">1. Writing a File</p>

```js
const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.promises
  .writeFile(
    filePath,
    "This file is created using fs.promises.writeFile",
    "utf-8"
  )
  .then(() => console.log("File written successfully!"))
  .catch((err) => console.error("Error writing file:", err));
```

- Creates and overwrites a file asynchronously.

<p style="color:coral; font-size:1.7rem;">2. Reading a File</p>

```js
fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => console.log("File Content:", data))
  .catch((err) => console.error("Error reading file:", err));
```

- Reads file content as text. Without `"utf-8"`, it returns a Buffer.

<p style="color:coral; font-size:1.7rem;">3. Appending Data</p>

```js
fs.promises
  .appendFile(
    filePath,
    "\nThis is an appended line using fs.promises.appendFile",
    "utf-8"
  )
  .then(() => console.log("Data appended successfully!"))
  .catch((err) => console.error("Error appending file:", err));
```

- Adds new data at the end of the file. Creates the file if it doesn’t exist.

<p style="color:coral; font-size:1.7rem;">4. Deleting a File</p>

```js
fs.promises
  .unlink(filePath)
  .then(() => console.log("File deleted successfully!"))
  .catch((err) => console.error("Error deleting file:", err));
```

- Permanently removes a file.

<p style="color:coral; font-size:1.7rem;">5. Reading a Folder</p>

```js
const folderPath = __dirname;

fs.promises
  .readdir(folderPath)
  .then((files) => console.log("Files in folder:", files))
  .catch((err) => console.error("Error reading folder:", err));
```

- Reads contents of a directory and returns an array of filenames.

<p style="color:yellow; font-weight:bold; font-size:1.7rem">Important Point:</p>

Instead of writing `fs.promises` every time, you can directly import `fs/promises` like this:

```js
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "Simpler import with fs/promises", "utf-8")
  .then(() => console.log("File written successfully!"))
  .catch((err) => console.error("Error:", err));
```

- Now you can directly use `fs.writeFile`, `fs.readFile`, etc., without chaining `fs.promises`.
