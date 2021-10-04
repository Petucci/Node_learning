const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');


const router = express.Router();

// 404
router.use((req, res, next) => {
    console.log(`404 not found --> ${req.originalUrl}`);
    res.status(404).render('404');
})

module.exports = router;