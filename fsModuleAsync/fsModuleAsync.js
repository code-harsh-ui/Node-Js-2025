const fs = require("fs");
const path = require("path");

//* Creating or Replacing the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// fs.writeFile(
//   filePath,
//   "This file is created using writeFile async method",
//   "utf-8",
//   (err) => {
//     if (err) throw err;
//     console.log("File written successfully!");
//   }
// );

//* Reading the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("File Content:", data);
// });

//* Appending the data into the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// fs.appendFile(
//   filePath,
//   "\nThis is a new line added using appendFile async method",
//   "utf-8",
//   (err) => {
//     if (err) throw err;
//     console.log("Data appended successfully!");
//   }
// );

//* Renaming the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// const newUpdatedFileName = "updateTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);

// fs.rename(filePath, newFilePath, (err) => {
//   if (err) throw err;
//   console.log("File renamed successfully!");
// });

//* Deleting the file

const filename = "updateTest.txt";
const newFilePath = path.join(__dirname, filename);

fs.unlink(newFilePath, (err) => {
  if (err) throw err;
  console.log("File deleted successfully!");
});
