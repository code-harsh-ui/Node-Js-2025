const fs = require("fs");
const path = require("path");

//* Creating or Replacing the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// const writeFile = fs.writeFileSync(
//   filePath,
//   "This file is created using writeFile method updated",
//   "utf-8"
// );

// console.log(writeFile);

//* Reading the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// // either use "utf-8 to read the file in text format"
// // const readFile = fs.readFileSync(filePath, "utf-8");

// // console.log(readFile);

// // or use console.log(readFile.toString())
// const readFile = fs.readFileSync(filePath);

// console.log(readFile.toString());

//* Appending the data into the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// const appendFile = fs.appendFileSync(
//   filePath,
//   "\nThis is the data in second line created using append file method in nodejs",
//   "utf-8"
// );

// console.log(appendFile);

//* Renaming the file

// const filename = "test.txt";
// const filePath = path.join(__dirname, filename);

// const newUpdatedFileName = "updateTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);

// const rename = fs.renameSync(filePath, newFilePath);

// console.log(rename);

//* Deleting the file

const filename = "updateTest.txt";
const filePath = path.join(__dirname, filename);

const fileDelete = fs.unlinkSync(filePath);
console.log(fileDelete);
