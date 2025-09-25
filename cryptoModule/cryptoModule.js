const crypto = require("crypto");

const randomValue = crypto.randomBytes(8).toString("hex");

// console.log(randomValue);

const hashValue = crypto
  .createHash("sha256")
  .update("harsh jha system")
  .digest("hex");

console.log(hashValue);

const hashValueAlter = crypto
  .createHash("sha256")
  .update("harsh jha system")
  .digest("hex");

console.log(hashValueAlter);
