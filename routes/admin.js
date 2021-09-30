const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');

const router = express.Router();

router.post('/product/create', (req,res, next) => {
    console.log('creating products');
    res.redirect('/');
});

router.get('/product/create', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
});

module.exports = router;