const jsonserver = require('json-server');
const cors = require('cors');

const server = jsonserver.create();

//convert json type data to js data before request resolved

const middleware = jsonserver.defaults();

const router=jsonserver.router('db.json');

server.use(middleware);
server.use(cors());
server.use(router)

const PORT = 5000;
server.listen(PORT, () => {
    console.log('server started');
})