const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("greet", () => {
//   console.log("Harsh Jha");
// });

// emitter.emit("greet");

//* You can also pass arguments while emitting

// emitter.on("greet", (arg) => {
//   console.log(arg);
// });

// emitter.emit("greet", "harsh Jha by passing arguments");

//* You can also pass multiple arguments

// emitter.on("greet", (argOne, argTwo) => {
//   console.log(argOne, argTwo);
// });

// emitter.emit(
//   "greet",
//   "harsh Jha by passing arguments",
//   "He is a full stack web developer"
// );

//* You can also pass the objects as an arguments

emitter.on("greet", (obj) => {
  console.log(`Hello my name is ${obj.name} and I'm a ${obj.prof}`);
});

emitter.emit("greet", { name: "Harsh Jha", prof: "full stack developer" });
