// create a web server
const http = require('http');
const url = require('url');

function handleRequest(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page.');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}

const server = http.createServer(handleRequest);

server.listen(9091, () => {
  console.log('Server listening on port 9091');
});
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

const port = 9091;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
