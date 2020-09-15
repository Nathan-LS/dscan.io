var express = require('express');
var router = express.Router();
var statusESI = require('../services/esi/status')

router.get('/status', function(req, res, next) {
    statusESI.getStatus().then(r => {
        res.send(r.body);
    }).catch(e => {
        next(e);
    });
});

module.exports = router;
