// server.js
const express = require("express")
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return app.render(req, res, '/home-page');
  });

  server.get('/login', (req, res) => {
    return app.render(req, res, '/login');
  });

  server.get('/test', (req, res) => {
    return app.render(req, res, '/test');
  });

  // server.get('/posts/:idx', (req, res) => {
  //   return app.render(req, res, '/home-page', req.params);
  // });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
