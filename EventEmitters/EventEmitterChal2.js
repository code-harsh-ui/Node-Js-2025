const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");
const emitter = new EventEmitter();

// console.log(__dirname);

const file = "counts.json";
// Here we are saying add the "file" into the current directory.
const currentDir = path.join(__dirname, file);

console.log(currentDir, "it gives full directory path if exists");

// Load previous counts or start fresh
let eventCounts = fs.existsSync(currentDir)
  ? JSON.parse(fs.readFileSync(currentDir, "utf8"))
  : {
      "user-login": 0,
      "user-logout": 0,
      "user-purchase": 0,
      "profile-update": 0,
    };

// Save helper
const save = () => fs.writeFileSync(currentDir, JSON.stringify(eventCounts));

// Events
emitter.on("user-login", (u) => {
  eventCounts["user-login"]++;
  console.log(`${u} logged in!`);
  save();
});
emitter.on("user-purchase", (u, i) => {
  eventCounts["user-purchase"]++;
  console.log(`${u} purchased ${i}`);
  save();
});
emitter.on("profile-update", (u, e) => {
  eventCounts["profile-update"]++;
  console.log(`${u} updated email to ${e}`);
  save();
});
emitter.on("user-logout", (u) => {
  eventCounts["user-logout"]++;
  console.log(`${u} logged out!`);
  save();
});
emitter.on("summary", () => console.log(eventCounts));

// Example usage
emitter.emit("user-login", "Harsh J");
emitter.emit("user-purchase", "Harsh J", "Laptop");
emitter.emit("profile-update", "Harsh J", "hello@webybuild.com");
emitter.emit("user-logout", "Harsh J");
emitter.emit("summary");
