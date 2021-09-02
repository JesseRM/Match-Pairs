const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/dist/html/index.html'));
});

module.exports = router;