# What is `globalThis` in simple words?

Think of `globalThis` as the biggest box in JavaScript where you can put things that should be available everywhere in your program.

## The Problem Before

- **In browser** → the biggest box was called `window`.
- **In Node.js** → the biggest box was called `global`.
- **In Web Workers** → it was called `self`.

So, it was confusing.

👉 Now JavaScript just says: use `globalThis` and it will always point to the right biggest box, no matter where the code runs.

## When to use it?

You use `globalThis` when you want to create or access something that should be available everywhere, regardless of the environment.

### Examples

1. In the browser

```js
globalThis.myAppName = "Webybuild";

console.log(window.myAppName); // "Webybuild"
console.log(globalThis.myAppName); // "Webybuild"
```

2. In Node.js

```js
globalThis.myAppName = "Webybuild";

console.log(global.myAppName); // "Webybuild"
console.log(globalThis.myAppName); // "Webybuild"
```

See? The same code works in both browser and Node.js ✅

### <p style="color:coral; font-size: 2rem">Real-world use case</p>

Imagine you are writing a library or a big app that runs in both browser and Node.js.
Instead of writing:

```js
// messy way
if (typeof window !== "undefined") {
  window.myLib = {};
} else if (typeof global !== "undefined") {
  global.myLib = {};
}
```

You can just write:

```js
// clean way
globalThis.myLib = {};
```

### <p style="color:yellow;">In short</p>

`globalThis` is the one name for the global object in all JavaScript environments.
You use it when you want your code to run anywhere (browser, Node.js, etc.) without changing it.
