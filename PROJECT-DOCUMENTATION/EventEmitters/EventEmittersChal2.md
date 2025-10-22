# [EventEmittersChal2.js](../../EventEmitters/EventEmitterChal2.js) Documentation

### <p style="color:deepskyblue">What is happening here?</p>

- Keeps track of `user events` like `login`, `logout`, `purchase`, and `profile update`.

- Saves the count of each event into a file called **counts.json**.

- Uses `fs` and `path` to work with the file system.

- Uses `EventEmitter` to listen and respond to events.

### <p style="color:deepskyblue">1. Where Are We Storing Data?</p>

```js
const file = "counts.json";
const currentDir = path.join(__dirname, file);
```

- `currentDir` is the full path of `counts.json`.
- Example:

```txt
D:\1.Web Hub\1.Web Development Bootcamp\Node,Express&MongoDb (2025)\Node js>\EventEmitters\counts.json
```

This is the file where event counts will be saved.

### <p style="color:deepskyblue">2. Starting Data (`Bootstrapping`)</p>

```js
let eventCounts = fs.existsSync(currentDir)
  ? JSON.parse(fs.readFileSync(currentDir, "utf8"))
  : {
      "user-login": 0,
      "user-logout": 0,
      "user-purchase": 0,
      "profile-update": 0,
    };
```

### <p style="color:yellow; font-size:1.7rem; font-weight: bold">Step-by-Step Explanation:</p>

### Step 1: Checking If File Exists:

```js
fs.existsSync(currentDir);
```

- Checks if `counts.json` file is present in your folder.

- Returns true if the file exists, otherwise false.

### Step 2: If File Does NOT Exist (First Run)

- The right side of `:` (in the ternary operator) runs.
- It simply \*\*creates a new javascript object in memory (RAM), like this:

```js
{
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0
}
```

### <p style="color:lightyellow; font-weight:bold;">Important:<p>

#### <p style="color:yellow;">At this moment, data is only inside the `eventCounts` variable, not in the file yet. We will save it later using the `save()` function with `fs.writeFileSync`.</p>

### Step: 3 If File Already Exists

```js
fs.readFileSync(currentDir, "utf-8");
```

- Reads the content of `counts.json`.
- Suppose the file contains:

```json
{ "user-login": 3, "user-logout": 2, "user-purchase": 1, "profile-update": 0 }
```

Then this method returns a string, not and object, like this:

```txt
'{"user-login":3,"user-logout":2,"user-purchase":1,"profile-update":0}'
```

#### <p style="color:yellow;">It's just plain **text**, not usable as a **normal object** yet.</p>

### Step:4 Converting That String to and **Object**

```js
JSON.parse(fs.readFileSync(currentDir, "utf8"));
```

- `JSON.parse() converts the JSON string into a Javascript object so that we can modify it.
- After conversion, it becomes:

```js
{
  "user-login": 3,
  "user-logout": 2,
  "user-purchase": 1,
  "profile-update": 0
}
```

### <p style="color:yellow">Now we can do things like</p>

```js
eventCounts["user-login"]++;
```

### <p style="color:deepskyblue">3. Saving Data/Writing Data</p>

```js
const save = () => fs.writeFileSync(currentDir, JSON.stringify(eventCounts));
```

### <p style="color:yellow; font-size:1.7rem; font-weight: bold">Step-by-Step Explanation:</p>

### Step 1: What is happening here?

- `save` is a function (or helper) that saves our event data into the **counts.json** file.
- It uses two important methods:
  1. `JSON.stringify(eventCounts)
  2. `fs.writeFileSync(currentDir, ...)

### Step 2: Understanding `JSON.stringify(eventCounts)`

- `JSON.stringify()` converts a **Javascript Object** into a JSON string (text).

- Example:

```js
const eventCounts = {
  "user-login": 1,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};
```

When we do this:

```js
JSON.stringify(eventCounts);
```

it becomes a **text string**

```txt
'{"user-login":1,"user-logout":0,"user-purchase":0,"profile-update":0}'
```

- **This string format is what can actually be written to a file**

### Step 3: Writing That String Into the File

```js
fs.writeFileSync(currentDir, JSON.stringify(eventCounts));
```

- `fs.writeFileSync() writes the data into the file **synchronously**
- The first argument in the file path (`currentDir`).
- The second argument is the **text we want to save**.

So the helper function:

```js
const save = () => fs.writeFileSync(currentDir, JSON.stringify(eventCounts));
```

### Does the following every time it's called:

1. Takes the current `eventCounts` object.
2. Converts it into text using `JSON.stringify`.
3. Saves it inside `counts.json`

### <p style="color:deepskyblue">4. User Login</p>

```js
emitter.on("user-login", (u) => {
  eventCounts["user-login"]++;
  console.log(`${u} logged in!`);
  save();
});
```

#### Explanation

- `"user-login"` is the event name.
- When this event is emitted, it increases the `"user-login"` count by 1.
- then it prints a message, and calls "save()" to update the file.

#### Example:

```js
emitter.emit("user-login", "Harsh J");
```

#### Console Output:

```txt
Harsh J logged in!
```

#### `counts.json` after save();

```json
{ "user-login": 1, "user-logout": 0, "user-purchase": 0, "profile-update": 0 }
```

```js
emitter.emit("user-login", "Harsh J");
```

### <p style="color:deepskyblue">5. User Purchase Event</p>

```js
emitter.on("user-purchase", (u, i) => {
  eventCounts["user-purchase"]++;
  console.log(`${u} purchased ${i}`);
  save();
});
```

#### Explanation:

- `"user-purchase"` event listens for two arguments:
  - `u` - username
  - `i` = item purchased
- Each tim this event happens, the `"user-purchase"` count increases by 1.

#### Example:

```js
emitter.emit("user-purchase", "Harsh J", "Laptop");
```

#### console Output:

```txt
Harsh J purchased Laptop
```

#### `counts.json` after save():

```json
{ "user-login": 1, "user-logout": 0, "user-purchase": 1, "profile-update": 0 }
```

### <p style="color:deepskyblue">6. Profile Update Event</p>

```js
emitter.on("profile-update", (u, e) => {
  eventCounts["profile-update"]++;
  console.log(`${u} updated email to ${e}`);
  save();
});
```

#### Explanation:

- `"profile-update"` event listens for two arguments:
  - `u` - username
  - `e` - new email
- The count increase by 1 and is saved in the file.

#### Example:

```js
emitter.emit("profile-update", "Harsh J", "hello@webybuild.com");
```

#### Console Output:

```txt
Harsh J updated email to hello@webybuild.com
```

#### counts.json after save();

```json
{ "user-login": 1, "user-logout": 0, "user-purchase": 1, "profile-update": 1 }
```

### <p style="color:deepskyblue">6. User Logout Event</p>

```js
emitter.on("user-logout", (u) => {
  eventCounts["user-logout"]++;
  console.log(`${u} logged out!`);
  save();
});
```

#### Explanation:

- `"user-logout"` event listens for one argument - the username.
- increases the `"user-logout"` count by 1.
- Logs a message and updates the file.

#### Example:

```js
emitter.emit("user-logout", "Harsh J");
```

#### Console Output:

```txt
Harsh J logged out!
```

#### `counts.json` after save():

```json
{ "user-login": 1, "user-logout": 1, "user-purchase": 1, "profile-update": 1 }
```

### <p style="color:deepskyblue">7. Summary Event</p>

```js
emitter.on("summary", () => console.log(eventCounts));
```

#### Explanation:

- `"summary"` doesn't change any data.
- It simply prints the entire `eventCounts` object to show current totals.

#### Example:

```js
emitter.emit("summary");
```

#### Console Output:

```txt
{
  'user-login': 1,
  'user-logout': 1,
  'user-purchase': 1,
  'profile-update': 1
}
```

- This helps you **see all event counts at once without opening the file**
