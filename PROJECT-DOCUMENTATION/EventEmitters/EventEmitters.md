# [EventEmitters.js](../../EventEmitters/EventEmitters.js) Documentation

## <p style="color:deepskyblue">What Is the events Module?</p>

- The `events` module in Node.js lets us create and handle **custom events**.
- It follows the **publish-subscribe pattern**:
  - `emit` → trigger an **event**.
  - `on` → listen for an **event**.

### <p style="color:lightblue">Why `new EventEmitter(`)?</p>

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();
```

**Explanation**

- `EventEmitter` is a **class** provided by Node.js.
- Using `new EventEmitter()` creates an **instance** of this class, called `emitter`.
- Each `emitter` object can:
  - **Register listeners** (`.on("event", callback)`)
  - **Emit events** (`.emit("event", data)`)
- Without `new`, we wouldn’t have a working object to manage events.

### <p style="color:coral">Example 1: Basic Event</p>

```js
emitter.on("greet", () => {
  console.log("Harsh Jha");
});

emitter.emit("greet");
```

### Output:

```js
Harsh Jha
```

### <p style="color:coral">Example 2: Passing Arguments</p>

```js
emitter.on("greet", (arg) => {
  console.log(arg);
});

emitter.emit("greet", "Harsh Jha by passing arguments");
```

### Output:

```js
Harsh Jha by passing arguments
```

### <p style="color:coral">Example 3: Multiple Arguments</p>

```js
emitter.on("greet", (argOne, argTwo) => {
  console.log(argOne, argTwo);
});

emitter.emit(
  "greet",
  "Harsh Jha by passing arguments",
  "He is a full stack web developer"
);
```

### Output:

```js
Harsh Jha by passing arguments He is a full stack web developer
```

### <p style="color:coral">Example 4: Passing Objects</p>

```js
emitter.on("greet", (obj) => {
  console.log(`Hello my name is ${obj.name} and I'm a ${obj.prof}`);
});

emitter.emit("greet", { name: "Harsh Jha", prof: "full stack developer" });
```

### Output:

```js
Hello my name is Harsh Jha and I'm a full stack developer
```

### <p style="color:coral">Example 5: Multiple Listeners</p>

```js
emitter.on("status", () => {
  console.log("Status event received - Logging");
});

emitter.on("status", () => {
  console.log("Status event received - Sending notification");
});

emitter.emit("status");
```

### Output:

```js
Status event received - Logging
Status event received - Sending notification
```

### <p style="color:yellow; font-weight:bold;">Learning: Why Use the events Module?</p>

- Helps build **asynchronous communication** between different parts of an app.

- Makes code modular and decoupled (emit in one place, listen in another).

- Widely used in **HTTP servers, streams, real-time apps, and frameworks like Express.**
