const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

//* Why .then() and .catch()
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.

//* Creating the new txt file
// fs.promises
//   .writeFile(
//     filePath,
//     "This file is created using fs.promises.writeFile",
//     "utf-8"
//   )
//   .then(() => console.log("File written successfully!"))
//   .catch((err) => console.error("Error writing file:", err));

//* Reading the file

// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log("File Content:", data))
//   .catch((err) => console.error("Error reading file:", err));

//* Appending the data into the file

// fs.promises
//   .appendFile(
//     filePath,
//     "\nThis is an appended line using fs.promises.appendFile",
//     "utf-8"
//   )
//   .then(() => console.log("Data appended successfully!"))
//   .catch((err) => console.error("Error appending file:", err));

//* Reading the folder/directory

const folderPath = __dirname;

fs.promises
  .readdir(folderPath)
  .then((files) => console.log("Files in folder:", files))
  .catch((err) => console.error("Error reading folder:", err));

//* Deleting the file

fs.promises
  .unlink(filePath)
  .then(() => console.log("File deleted successfully!"))
  .catch((err) => console.error("Error deleting file:", err));
