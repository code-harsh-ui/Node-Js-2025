# [fileCreator.js](../../../miniProjects/FileCreator/fileCreator.js) Documentation

## <p style="color:deepskyblue;">What is happening here</p>

- This script lets the user **create a new text file** directly from the terminal.
- It uses built-in Node.js modules:

  - `readline`: takes user input (file name and content).
  - `fs`: writes that content into a new file.
  - `path`: joins folder paths safely for different operating systems.

- This created file is automatically stored inside the **FileCreator** folder.

### <p style="color:coral;">Importing Required Modules</p>

```js
import readline from "readline";
import fs from "fs";
import path from "path";
```

- `readline`: to get input from the user in the terminal.
- `fs`: to create and write files.
- `path`: to handle directory paths properly (cross-platform-safe)

### <p style="color:coral;">Creating the Readline Interface</p>

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

- Connects your Node.js program to the **terminal** input/output.

### <p style="color:coral;">Setting the Directory Path</p>

```js
const DIR_PATH = path.join(process.cwd(), "miniProjects", "FileCreator");
```

#### Explanation:

- `process.cwd()`: returns the current working directory.
- `path.join()`: safely joins folder names together.

#### Output:

```txt
D:\NodeJS Projects\miniProjects\FileCreator
```

- All new files will be created inside this folder.

### <p style="color:coral;">File Creation Function</p>

```js
const fileCreation = () => {
  rl.question("Enter your file name: ", (filename) => {
    rl.question("Enter the content for your file: ", (content) => {
      const filePath = path.join(DIR_PATH, `${filename}.txt`);

      fs.writeFile(filePath, content, "utf-8", (err) => {
        if (err) {
          console.error("❌ Error while writing the file:", err.message);
        } else {
          console.log(`✅ File "${filename}.txt" created successfully at:`);
          console.log(filePath);
        }
        rl.close();
      });
    });
  });
};
```

<p style="color:yellow; font-size:1.7rem; font-weight:bold;">Step-by-Step Explanation:</p>

### Step 1: Asking for File Name

```js
rl.question("Enter your file name: ", (filename) => { ... });
```

- Prompts the user to type the file name.
- Example Input:

  ```txt
  Enter your file name: notes
  ```

- The answer is stored in the variable `filename`.

### Step 2: Asking for File Content

```js
rl.question("Enter the content for your file: ", (content) => { ... });
```

- After typing the name, it asks for file content.
- Example Input:

  ```txt
  Enter the content for your file: This is my first file created using Node.js!
  ```

### Step 3: Creating the File path

```js
const filePath = path.join(DIR_PATH, `${filename}.txt`);
```

- Combines the folder path with the user's filename.

#### Example Result:

```txt
D:\NodeJS Projects\miniProjects\FileCreator\notes.txt
```

- This ensures the file is created inside **FileCreator folder**, not elsewhere.

### Step 3: Writing the File Using `fs.writeFile()`

```js
fs.writeFile(filePath, content, "utf-8", (err) => {
  ...
});
```

#### Explanation:

- `fs.writeFile()` - asynchronously creates or overwrites a file.

- Takes 4 arguments:

  1.  `filePath`: location where file will be created.
  2.  `content`: text to write inside the file.
  3.  `"utf-8"`: ensures proper encoding.
  4.  `(err)`: callback to handle success or error.

### <p style="color:coral;">Handling Success or Error</p>

```js
if (err) {
  console.error("❌ Error while writing the file:", err.message);
} else {
  console.log(`✅ File "${filename}.txt" created successfully at:`);
  console.log(filePath);
}
```

- If there's a problem (like missing folder), it logs an error.
- Otherwise, shows a success message with the full file path.

#### Example Output:

```txt
✅ File "notes.txt" created successfully at:
D:\NodeJS Projects\miniProjects\FileCreator\notes.txt
```

### <p style="color:coral;">Closing the Readline Interface</p>

```js
rl.close();
```

- Closes the `readline` session after the operation completes.
- The program stops taking input after the file is created.

### <p style="color:coral;">Calling the Function</p>

```js
fileCreation();
```

- Runs the entire file creation process.
- Prompts the user, takes input, creates file, and displays confirmations.
