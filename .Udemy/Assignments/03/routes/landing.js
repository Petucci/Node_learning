const express = require('express');
const path = require('./../utils/path');

var router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.path.join(path.baseDirectory, 'views', 'landing.html'))
})

module.exports = router;