const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
console.log('\n\n################\nPORT', process.env.PORT)
const port = process.env.PORT || 3010;

server.use(middlewares);
server.use(router);

server.listen(port);