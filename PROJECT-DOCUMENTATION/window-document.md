# Why There’s No `window` or `document` in the Server-Side World

When you work with JavaScript in the browser, you have access to global objects like:

- **`window`** → represents the browser window.
- **`document`** → represents the HTML page (DOM) loaded in that window.

These objects exist because browsers provide them, so you can interact with the user interface (UI), manipulate HTML, handle events, etc.

## On the Server Side (Node.js)

- Node.js runs outside the browser, on a server or local machine.
- There is no graphical interface or HTML page to interact with.
- Therefore, objects like `window`, `document`, or the DOM do not exist in Node.js.

Instead, Node.js provides server-side objects and modules, such as:

- **`global`** → Node’s global object (instead of `window`).
- **`process`** → gives information about the current Node.js process.
- Built-in modules like `fs` (file system), `http` (server creation), etc.

### Example:

**In Browser:**

```js
console.log(window.innerWidth); // Works in browser
console.log(document.title); // Works in browser
```

**In Node.js (Server):**

```js
console.log(global.process.platform); // Works in Node.js
console.log(window); // ❌ Error: window is not defined
console.log(document); // ❌ Error: document is not defined
```

- <p style="color:yellow;">There’s no window or document in the server-side world (like Node.js) because those objects belong to the browser environment, not the server. Servers deal with files, requests, databases, and APIs not with HTML pages or browser windows.</p>
