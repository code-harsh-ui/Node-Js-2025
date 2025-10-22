# [EventEmittersChal.js](../../EventEmitters/EventEmitterChal.js) Documentation

## <p style="color:deepskyblue">What is happening here</p>

- Tracks user actions - `login`, `logout`, `purchase`, and `profile update`.
- Increments count for each event in memory.
- Logs custom messages for each action.
- Prints a final summary of counts.
- Users \*\*Node.js `EventEmitter` to handle an emit events.

### <p style="color: white">1. Data Storage</p>

```js
const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};
```

- Keeps count of how many times each event occurs.
- Stored temporarily in memory (no file I/O).

### <p style="color:coral; font-weight:bold; font-size:1.7rem">Step-by-step Explanation

### Step-1: Event Listeners

Each event listens for specific actions:

```js
emitter.on("user-login", (u) => {
  eventCounts["user-login"]++;
  console.log(`${u} logged in!`);
});
```

- Increments the `"user-login"` count and logs a message.

### Step-2: User Purchase

```js
emitter.on("user-purchase", (u, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${u} logged in!, ${item} purchased`);
});
```

- Tracks purchases and logs what was bought.

### Step-3 Profile Update

```js
emitter.on("profile-update", (u, email) => {
  eventCounts["profile-update"]++;
  console.log(`${u} updated their email ${email}`);
});
```

- Logs profile/email changes.

### Step-4 User Logout

```js
emitter.on("user-logout", (u) => {
  eventCounts["user-logout"]++;
  console.log(`${u} logged out!`);
});
```

- Tracks user logouts.

### Step-5 Summary Event

```js
emitter.on("summary", () => console.log(eventCounts));
```

- Displays total event counts when called.

### <p style="color:deepskyblue; font-weight:bold">Execution:</p>

```js
emitter.emit("user-login", "Harsh J");
emitter.emit("user-purchase", "Harsh J", "Laptop");
emitter.emit("profile-update", "Harsh J", "hello@webybuild.com");
emitter.emit("user-logout", "Harsh J");
emitter.emit("summary");
```

### Output:

```txt
Harsh J logged in!
Harsh J logged in!, Laptop purchased
Harsh J updated their email hello@webybuild.com
Harsh J logged out!
{ 'user-login': 1, 'user-logout': 1, 'user-purchase': 1, 'profile-update': 1 }
```
