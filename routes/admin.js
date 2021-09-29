const express = require('express');

const router = express.Router();

router.post('/product/create', (req,res, next) => {
    console.log(req.body);
    res.redirect('/product');
});

router.get('/product/create', (req, res, next) => {
    res.send('hello to products :)');
});

module.exports = router;