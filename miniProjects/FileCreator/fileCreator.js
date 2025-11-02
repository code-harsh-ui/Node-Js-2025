import readline from "readline";
import fs from "fs";
import path from "path";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DIR_PATH = path.join(process.cwd(), "miniProjects", "FileCreator");

const fileCreation = () => {
  rl.question("Enter your file name: ", (filename) => {
    rl.question("Enter the content for your file: ", (content) => {
      // ✅ Create the file inside FileCreator folder
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

fileCreation();
