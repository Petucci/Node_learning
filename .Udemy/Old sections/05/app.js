const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', (req, res, next) => {
    console.log(req.body);
    next.call();
});

app.post('/product/create', (req,res, next) => {
    console.log(req.body);
    res.redirect('/product');
});

app.use('/product', (req, res, next) => {
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('Hello from express 2')
});

app.listen(3000);