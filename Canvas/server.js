const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      fs.createReadStream(__dirname + '/index.html').pipe(res);
      break;
    case '/style.css':
      res.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
      fs.createReadStream(__dirname + '/style.css').pipe(res);
      break;
    case '/script.js':
      res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'});
      fs.createReadStream(__dirname + '/script.js').pipe(res);
      break;
    case '/additional.js':
      res.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'});
      fs.createReadStream(__dirname + '/additional.js').pipe(res);
      break;
    case '/space.jpg':
      res.writeHead(200, {'Content-Type': 'image/jpeg; charset=utf-8'});
      fs.createReadStream(__dirname + '/space.jpg').pipe(res);
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
      res.end('Страница не найдена');
  }

});

server.listen(3000, () => {'Сервер работает!'});

console.log('Отслеживаем порт 3000');
