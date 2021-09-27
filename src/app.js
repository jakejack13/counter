//@ts-check

const http = require('http');
const hashcounter = require('./hashcounter');

var counter = new hashcounter.HashCounter();

const requestListener = function (req, res) {
  var str = req.url;
  var key = str.replace(/\//g,"");
  counter.add(key);

  res.writeHead(200);
  res.end(`${key}: ${counter.get(key)}\n`);
}

const server = http.createServer(requestListener);
server.listen(8080);