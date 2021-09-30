const path = require('path');
const express = require('express');
const rootDir = require('../util/path.js');


const router = express.Router();

// 404
router.use((req, res, next) => {
    console.log(`404 not found --> ${req.originalUrl}`);
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

module.exports = router;