const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
});
emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} logged in!, ${item} purchased`);
});
emitter.on("profile-update", (username, email) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their email ${email}`);
});
emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

emitter.emit("user-login", "Harsh J");
emitter.emit("user-purchase", "Harsh J", "Laptop");
emitter.emit("profile-update", "Harsh J", "hello@webybuild.com");
emitter.emit("user-logout", "Harsh J");

emitter.emit("summary");
