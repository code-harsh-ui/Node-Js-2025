const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("I am Harsh Jha and this is my first web server in Node.js");
    res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is the about page fetching from the server</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Contact page");
    res.end();
  } else {
    res.write("404 Page Not Found");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(
    "Listening on port running with in built node auto restart",
    PORT
  );
});
