# [fsModule.js](../../fsModuleAsyncAwaitTryCatch/fsModuleAsyncAwaitTryCatch.js) Documentation

## <p style="color:deepskyblue">Why async/await with try/catch?</p>

- `async/await` makes async code look synchronous and easier to read.
- `try/catch` provides clean error handling in one place.
- Best practice for modern Node.js projects.

### <p style="color:coral;">1. Writing a File</p>

```js
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);

async function writeFileExample() {
  try {
    await fs.writeFile(
      filePath,
      "This file is created using async/await",
      "utf-8"
    );
    console.log("File written successfully!");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

writeFileExample();
```

- Creates/overwrites a file asynchronously.

### <p style="color:coral;">2. Reading a File</p>

```js
async function readFileExample() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("File Content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileExample();
```

- Reads file content as plain text.

### <p style="color:coral">3. Appending Data</p>

```js
async function appendFileExample() {
  try {
    await fs.appendFile(
      filePath,
      "\nThis line is added using async/await appendFile",
      "utf-8"
    );
    console.log("Data appended successfully!");
  } catch (err) {
    console.error("Error appending file:", err);
  }
}

appendFileExample();
```

- Adds new content at the end of the file.

### <p style="color:coral">4. Reading a Folder</p>

```js
const folderPath = __dirname;

async function readFolderExample() {
  try {
    const files = await fs.readdir(folderPath);
    console.log("Files in folder:", files);
  } catch (err) {
    console.error("Error reading folder:", err);
  }
}

readFolderExample();
```

- Returns an array of filenames in the folder.

### <p style="color:coral">5. Deleting a File</p>

```js
async function deleteFileExample() {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (err) {
    console.error("Error deleting file:", err);
  }
}

deleteFileExample();
```

- Permanently deletes the file.
