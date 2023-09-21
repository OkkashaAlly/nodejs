const {parentPort} = require('worker_threads');

let j = 0;
// simulate slower page by delaying response
for (let i = 0; i < 140000; i++) {
  j++;
  console.log(j);
}

parentPort.postMessage(j);