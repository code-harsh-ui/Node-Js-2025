# [randomJokeGenerator.js](../../../miniProjects/RandomJokeGenerator/randomJokeGenerator.js) Documentation

## <p style="color:deepskyblue;">What is happening here?</p>

- This program fetches a random joke from a public API using Node.js's built in `https` module.
- It demonstrates how to:
  - Send a GET request to an external API.
  - Receive and collect data from the internet.
  - Parse the received JSON response.
  - Display the joke in the console.

### <p style="color:coral;">Importing the `https` Module</p>

```js
import https from "https";
```

- The `https` module allows Node.js to make secure HTTP requests (HTTPS).
- It is used to fetch data from online APIs.
- Works similar to the `fetch()` function in browsers, but is built into Node.js

### <p style="color:coral;">Creating the `getJoke` Function</p>

```js
const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  ...
};
```

- `getJoke()` is the main function that sends a request to the `Joke API`.
- The `url` variable stores the API endpoint when you visit it, it returns a random joke in JSON format.

### Example API response (If you open that URL manually);

```json
{
  "type": "programming",
  "setup": "Why do programmers prefer dark mode?",
  "punchline": "Because light attracts bugs."
}
```

### <p style="color:coral;">Sending an `HTTPS` `Get` Request</p>

```js
https.get(url, (response) => {
  let dataReceived = "";
  ...
});
```

#### Explanation:

- `https.get()` sends \*\*GET request to the provided URL.
- The callback `(response)` runs when the server starts sending data.
- Data from the API doesn't come all at once, it comes in **chunks**.
- So we collect those **chunks** into a variable `dataReceived`.

### <p style="color:coral;">Receiving Data in Chunks</p>

```js
response.on("data", (chunk) => {
  dataReceived += chunk;
});
```

- Each time a small piece of data (a chunk) is received, it is added to the string `dataReceived`.
- ### <p style="color:yellow;">Think of it as building the full API response piece by piece</p>

#### Example of how data arrives from the API:

When you call the joke API, it might send the data like this:

#### Chunk 1:

```txt
{"type":"programming",
```

#### Chunk 2:

```txt
"setup":"Why do programmers prefer dark mode?",
```

#### Chunk 3:

```txt
"punchline":"Because light attracts bugs."}
```

Node.js receives them **one by one**, and every time it gets a piece,
this line runs:

```js
dataReceived += chunk;
```

| Step | Chunk Received                                    | dataReceived Value So Far                                                                                          |
| ---- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1    | `{"type":"programming",`                          | `{"type":"programming",`                                                                                           |
| 2    | `"setup":"Why do programmers prefer dark mode?",` | `{"type":"programming","setup":"Why do programmers prefer dark mode?",`                                            |
| 3    | `"punchline":"Because light attracts bugs."}`     | `{"type":"programming","setup":"Why do programmers prefer dark mode?","punchline":"Because light attracts bugs."}` |

Once all chunks are received, we get the full JSON text.

### <p style="color:coral;">Handling the End of the Response</p>

```js
response.on("end", () => {
  const joke = JSON.parse(dataReceived);
  console.log(joke);
  console.log(`Here is a random ${joke.type} joke:`);
  console.log(`${joke.setup}`);
  console.log(`${joke.punchline}`);
});
```

#### Explanation:

- `"end"` event means all chunks have been received successfully.
- `JSON.parse(dataReceived)` converts the text into a Javascript object that we can access.
- Then we print the joke in a formatted way.

<p style="color:yellow; font-size:1.7rem; font-weight:bold;">Step-by-Step Example:</p>

### Step 1: Request is sent to API

```js
https.get(url, callback);
```

- Sends a GET request to `https://official-joke-api.appspot.com/random_joke`

### Step 2: Data is received in chunks

```js
response.on("data", (chunk) => { ... });
```

- Collects the data piece by piece.

### Step 3: When response ends

```js
response.on("end", () => { ... });
```

Converts the received data into JSON and logs it.

#### Example Console Output:

```json
{
  "type": "programming",
  "setup": "Why do programmers prefer dark mode?",
  "punchline": "Because light attracts bugs."
}
```

Then it prints:

```txt
Here is a random programming joke:
Why do programmers prefer dark mode?
Because light attracts bugs.
```

### <p style="color:coral;">Handling Errors</p>

```js
response.on("error", (err) => {
  console.log(`Error fetching the joke ${err.message}`);
});
```

- if there's a network issue or the API is down, this blocks handles it gracefully.
- Prevents your program from crashing.

#### Output:

```txt
Error fetching the joke: getaddrinfo ENOTFOUND official-joke-api.appspot.com
```

### <p style="color:coral;">Calling the function</p>

```js
getJoke();
```
