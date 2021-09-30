const express = require('express');
const path = require('./../utils/path');

var router = express.Router();

router.use((req, res, next) => {
    console.log(`404 error on link ${req.baseUrl}`);
    res.status(404).sendFile(path.path.join(path.baseDirectory, 'views', '404.html'))
})

module.exports = router;