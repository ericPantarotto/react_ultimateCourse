const { readFileSync } = require('fs');
const { createServer } = require('http');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { Home } = require('./starter.js');
const { parse } = require('url');

// eslint-disable-next-line no-undef
const htmlTemplate = readFileSync(`${__dirname}/index.html`, 'utf-8');
const clientJS = readFileSync(`${__dirname}/client.js`, 'utf-8');

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;

  if (pathName === '/') {
    const renderedReact = renderToString(<Home />);
    const html = htmlTemplate.replace('%%%CONTENT%%%', renderedReact);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(html);
  } else if (pathName === '/client.js') {
    res.writeHead(200, { 'content-type': 'application/javascript' });
    res.end(clientJS);
  } else {
    res.end('The url cannot be found');
  }
});


server.listen(8001, console.log('Listening for requests on port 8001'));
