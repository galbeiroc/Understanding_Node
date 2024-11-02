/* const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer();

server.on("request", (request, response) => {
  const result = fs.readFileSync("./text.txt");

  response.setHeader("Content-Type", "text/plain");
  response.end(result);
});

server.listen(4080, '127.0.0.1', () => {
  console.log('Server has started on: ', server.address());
}); */

console.log('A');

setTimeout(() => {
  console.log('B');
}, 0)
console.log('C');
console.log('D');
console.log('F');