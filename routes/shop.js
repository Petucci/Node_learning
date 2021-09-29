const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello from express 2');
});

module.exports = router;