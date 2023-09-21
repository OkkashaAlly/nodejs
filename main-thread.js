const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");
    worker.once("message", j => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page - " + j);
    });
  }
});

server.listen(5000, () => {
  console.log("Server running...");
});
