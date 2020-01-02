var express = require('express');
var router = express.Router();

/* GET waze listing. */
router.get('/waze', function(req, res, next) {
    res.send('Waze API');
});

module.exports = router;
