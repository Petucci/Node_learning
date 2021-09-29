const express = require('express');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const port = 3000;
var app = express();

const logToConsole = (uuid, message) => {
    console.log(`[${uuid}] [${moment().toString()}] ${message}}`);
}

app.use('/', (req, res, next) => {
    req.scope = {};
    req.scope.uuid = uuidv4()
    next.call();
})

app.use('/', (req, res, next) => {
    logToConsole(req.uuid, req.originalUrl);
    next.call();
})

app.use('/users', (req, res, next) => {
    logToConsole(req.uuid, '/Users was called');
    res.send('welcome to users');
})

app.use('/', (req, res, next) => {
    logToConsole(req.uuid, 'Landing page was called');
    res.send('Hello second assignment');
})

app.listen(port);