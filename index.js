// const path = require('node:path');
const path = require('path');

// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))

// console.log(path.extname(__filename))

// console.log(path.dirname(__filename))
// console.log(path.dirname(__dirname))

// console.log(path.parse(__filename))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./index.js'))

// console.log(path.join('folder1', 'folder2', 'folder3', 'index.html'))
// console.log(path.join('/folder1', 'folder2', 'folder3', 'index.html'))
// console.log(path.join('/folder1', '//folder2', 'folder3', 'index.html'))
// console.log(path.join('/folder1', '//folder2', 'folder3', '../index.html'))
// console.log(path.join(__dirname, 'data.json'))

// console.log(path.resolve('folder1', 'folder2', 'folder3', 'index.html'))
// console.log(path.resolve('/folder1', 'folder2', 'folder3', 'index.html'))
// console.log(path.resolve('/folder1', '//folder2', 'folder3', 'index.html'))
// console.log(path.resolve('/folder1', '//folder2', 'folder3', '../index.html'))
// console.log(path.resolve(__dirname, 'data.json'))

const greet = (name)=> {
    console.log(`Hello ${name}`)
}

const higherOrderFunction = (callback)=> {
  const name =  'Okkasha Ally'
  callback(name)
}

higherOrderFunction(greet)