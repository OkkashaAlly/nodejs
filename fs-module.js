// const fs = require("fs");

// // READ DATA
// // const fileData = fs.readFileSync("./text.txt")
// // console.log(fileData.toString())

// const fileData = fs.readFileSync("./text.txt", "utf-8");
// console.log(fileData)

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // WRITE DATA
// fs.writeFileSync("./text.txt", "Hello World -");

// fs.writeFileSync("./text.txt", "Hello World2 ", { flag: 'a'},(err) => {
//   if (err) throw err;
//   console.log("Data written to file");
// }
// );

const fs = require("fs/promises");

fs.readFile("./text.txt", "utf-8")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

async function readFile() {
  try {
    const data = await fs.readFile("./text.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}  

readFile();