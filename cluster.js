const cluster = require("cluster");
const OS = require("os");

console.log(OS.cpus().length);

// Is the file being executed in master mode?
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running...`);
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started...`);

  const http = require("http");

  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slow-page") {
      // simulate slower page by delaying response
      for (let i = 0; i < 140000; i++) {
        console.log(i);
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page");
    } else if (req.url === "/slow-page-2") {
      // simulate slower page by delaying response
      for (let i = 0; i < 300000; i++) {
        console.log(i);
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page");
    }
  });

  server.listen(5000, () => {
    console.log("Server running...");
  });
}
