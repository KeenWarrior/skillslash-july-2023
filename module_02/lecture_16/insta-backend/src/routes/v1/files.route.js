const express = require('express');
const fs = require('fs');

const router = express.Router();

router.post('/upload', (req, res) => {
    console.log(req.files);
});

module.exports = router;
