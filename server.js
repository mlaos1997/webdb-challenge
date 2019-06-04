const express = require('express');
const server = express();
const helmet = require('helmet');

const projectsRouter = require('./routes/projects/projectsRouter.js');
const actionsRouter = require('./routes/actions/actionsRouter.js');

server.use(express.json());
server.use(helmet());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>WEB DB IV Challenge</h2>`);
});

module.exports = server;