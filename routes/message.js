const express = require('express');
const router = express('router');


router.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;