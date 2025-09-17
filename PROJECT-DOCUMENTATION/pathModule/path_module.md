# [pathModule.js](../../pathModule/path_module.js) Documentation

## <p style="color:deepskyblue">What Is the path Module?</p>

- A **built-in Node.js module** for working with file and directory paths.
- Helps avoid manual string concatenation.

### Examples in code

```js
const path = require("path");

console.log(__dirname); // Current directory
console.log(__filename); // Current file path
```

```js
const filePath = path.join("folder", "students", "data.txt");
console.log(filePath); // folder/students/data.txt
```

```js
const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({ parseData, resolvedPath, extname, basename, dirname });
```

### <p style="color:coral; font-weight: bold;">Sample Output (Dummy Example)</p>

```json
{
  "parseData": {
    "root": "",
    "dir": "folder/students",
    "base": "data.txt",
    "ext": ".txt",
    "name": "data"
  },
  "resolvedPath": "C:\\Users\\Harsh\\project\\folder\\students\\data.txt",
  "extname": ".txt",
  "basename": "data.txt",
  "dirname": "folder/students"
}
```

<p style="color:yellow; font-weight: bold;">Why Double Slashes in Console?</p>

- On Windows, paths use backslashes \.

- In JavaScript, \ is an escape character, so when logged it appears as \\.

- **Example**:

  ```js
  C:\\Users\\Harsh\\project\\file.js
  ```

  But the actual file path is:

  ```js
  C:\Users\Harsh\project\file.js
  ```

  <p style="color:yellow; font-weight:bold;">Learning: Use path for Safer Path Handling</p>

  - Avoids OS-specific bugs (Linux uses /, Windows uses \).

  - Provides helpers like join, parse, basename, dirname, extname.
