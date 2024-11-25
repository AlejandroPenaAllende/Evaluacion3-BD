const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const router2 = jsonServer.router("IMG");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);
server.use(router2);

server.listen(port);