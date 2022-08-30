const http = require('http');

let server = http.createServer((req, res) => {
  let data = {
    requestedUrl: req.url,
    message: "hello"
  };
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
})
server.listen(3000);
