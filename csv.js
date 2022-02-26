const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
  res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
