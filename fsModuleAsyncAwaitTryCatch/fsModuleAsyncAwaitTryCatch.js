const fs = require("fs/promises");
const path = require("path");

const fileName = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);

//* Creating the file

// async function writeFileExample() {
//   try {
//     await fs.writeFile(
//       filePath,
//       "This file is created using async/await",
//       "utf-8"
//     );
//     console.log("File written successfully!");
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// }

// writeFileExample();

//* Reading the file

// async function readFileExample() {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log("File Content:", data);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   }
// }

// readFileExample();

//* Appending the data into the file

// async function appendFileExample() {
//   try {
//     await fs.appendFile(
//       filePath,
//       "\nThis line is added using async/await appendFile",
//       "utf-8"
//     );
//     console.log("Data appended successfully!");
//   } catch (err) {
//     console.error("Error appending file:", err);
//   }
// }

// appendFileExample();

//* Reading the folder

// const folderPath = __dirname;

// async function readFolderExample() {
//   try {
//     const files = await fs.readdir(folderPath);
//     console.log("Files in folder:", files);
//   } catch (err) {
//     console.error("Error reading folder:", err);
//   }
// }

// readFolderExample();

//* Deleting the file

async function deleteFileExample() {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (err) {
    console.error("Error deleting file:", err);
  }
}

deleteFileExample();
