// Create web server that listens for incoming requests
// and responds with a comment from the array of comments
// when a request is made to the /comments endpoint

const http = require("http");

const comments = [
  { username: "Alice", comment: "I am so cool" },
  { username: "Bob", comment: "I am so smart" },
  { username: "Charlie", comment: "I am so dumb" },
  { username: "Dennis", comment: "I am so happy" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/comments" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// Test with curl
// curl http://localhost:3000/comments
// curl -X POST http://localhost:3000/comments
// curl -X GET http://localhost:3000/other