# [server.js](../../webServer/server.js) Documentation

## <p style="color:deepskyblue;">What is happening here</p>

- This code creates a basic HTTP server using Node.js built in `http` module.
- The server listens on port 3000 and responds to requests based on the URL path.
- It can handle multiple routes like `/`, `/about`, `/contact`, and shows an error message for others.

### <p style ="color:coral;" >1. Importing the http Module</p>

```js
const http = require("http");
```

- The `http` module allows Node.js to create web servers.
- It helps and receive HTTP requests and responses.

### <p style ="color:coral;" >2. Setting the PORT</p>

```js
const PORT = 3000;
```

- The server will listen on **port 3000**.
- You can open `http://localhost:3000` in your browser to test it.

### <p style="color:coral">3.Creating the Server</p>

```js
const server = http.createServer((req, res) => {
  // logic here
});
```

- `http.createServer()` creates a new server.
- It takes a callback function with two parameters:
  - #### <p style="color:yellow">`req` - represents the request coming from the client (browser).</p>
  - #### <p style="color:yellow">`res` - represents the response we send back.</p>
- The logic inside decides **what to send** depending on the URL.

### <p style="color:coral">4. Handling Routes (URLs)</p>

#### Home page

```js
if (req.url === "/") {
  res.write("I am Harsh Jha and this is my first web server in Node.js");
  res.end();
}
```

- If the user visits `/`, it shows a plain text message.

#### Example:

URL - `http:localhost:3000/`

#### Output:

```txt
I am Harsh Jha and this is my first web server in Node.js
```

#### About page

```js
else if (req.url === "/about") {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>This is the about page fetching from the server</h1>");
  res.end();
}
```

- When the user visits `/about`, we send an HTML response.
- `res.setHeader("Content-Type", "text/html")` tells the browser that the content is HTML.

#### Example:

URL - `http:localhost:3000/about`

#### Output (in browser):

```html
<h1>This is the about page fetching from the server</h1>
```

#### Contact Page

```js
else if (req.url === "/contact") {
  res.setHeader("Content-Type", "text/plain");
  res.write("Contact page");
  res.end();
}
```

- When the user visits `/contact`, it sends plain text.
- `"Content-Type: "text/plain"` ensures it displays simple text (not HTML).

#### Example:

URL - `http://localhost:3000/contact`

#### Output:

```txt
Contact page
```

#### 404 Page (Invalid Routes)

```js
else {
  res.write("404 Page Not Found");
  res.end();
}
```

- If the user enters any other URL (like `/hello` or `/random`),
  it shows 404 error message.

#### Example:

URL - `http://localhost:3000/hello`

#### Output:

```txt
404 Page Not Found
```

### <p style="color:coral;">5. Starting the server</p>

```js
server.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
```

- `server.listens()` starts the server on the defined port.
- The callback runs once when the server starts successfully.

#### Console Output:

```txt
Listening on port 3000
```

### <p style="color:coral;">What does `res.end()` do?</p>

- `res.end()`- Ends the response
