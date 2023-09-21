const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    // simulate slower page by delaying response
    for (let i = 0; i < 140000; i++) {
      console.log(i)
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow page");
  }
})

server.listen(5000, () => {
  console.log("Server running...");
})