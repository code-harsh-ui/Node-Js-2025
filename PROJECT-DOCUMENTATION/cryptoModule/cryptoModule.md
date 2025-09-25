# [cryptoModule.js](../../cryptoModule/cryptoModule.js) Documentation

## <p style="color:deepskyblue">What Is the crypto Module?</p>

- A **built-in Node.js** module for cryptography (encryption, hashing, generating random values).

- Provides utilities for **security**, **authentication**, and **data** integrity.

### <p style="color:coral">Example 1: Generating Random Values</p>

```js
const crypto = require("crypto");

const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);
```

### Ouput (Example):

```js
a3f9c2d4e8b17a5c;
```

- Generates a random 8-byte hex string, useful for **tokens or unique IDs**.

### <p style="color:coral">Example 2: Hashing a String</p>

```js
const hashValue = crypto
  .createHash("sha256")
  .update("harsh jha system")
  .digest("hex");

console.log(hashValue);
```

### Output (Example):

```js
d9b1d7db4cd6e70935368a1efb10e377...
```

- Creates a SHA-256 hash of the string `"harsh jha system"`.

### <p style="color:coral">Example 3: Repeated Hashing</p>

```js
const hashValueAlter = crypto
  .createHash("sha256")
  .update("harsh jha system")
  .digest("hex");

console.log(hashValueAlter);
```

### Output (Example):

Same as `hashValue` (hashing the same input always gives the same result).

### <p style="color:yellow; font-weight:bold;">Why and Where Do We Use crypto?</p>

- **Why:** For **security** hashing, encrypting, generating tokens.
- **Where:**
  - Storing **hashed passwords** in databases.
  - Generating **API keys, access tokens, session IDs**.
  - Verifying **data integrity**.
