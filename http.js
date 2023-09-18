const http = require('http')

// const server = http.createServer((req, res)=> {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   res.end('<p>Hello World</p>')
// })

const server = http.createServer((req, res)=> {
  const superHero = {
    name: 'Batman',
    age: 30,
    city: 'Gotham'
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(superHero))
})

server.listen(5000, ()=> {
  console.log('Server running...')
})