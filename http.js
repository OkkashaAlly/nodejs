const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res)=> {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('Hello World')
// })

// const server = http.createServer((req, res)=> {
//   const superHero = {
//     name: 'Batman',
//     age: 30,
//     city: 'Gotham'
//   }
//   res.writeHead(200, {'Content-Type': 'application/json'})
//   res.end(JSON.stringify(superHero))
// })

// const server = http.createServer((req, res) => {
//   // const html = fs.readFileSync("./index.html", "utf-8");
//   res.writeHead(200, { "Content-Type": "text/html" });
//   // res.end(html);

//   const html = fs.createReadStream(__dirname + "/index.html").pipe(res)
// });

const server = http.createServer((req, res) => {
  const name= "Okkasha"
  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name)
  res.end(html);

});

server.listen(5000, () => {
  console.log("Server running...");
});
