var express = require('express');
var router = express.Router();
var ct = require('../controller/controller')

/* GET users listing. */
/*
 * manière de bloquer une ip
 * 
 * router.get('/', function (req, res, next) {
    if (req.ip == '::1') {
        res.send('ok')
    }
    else { res.send('not ok') }
});*/



router.post('/', function (req, res, next) {
    ct.login(req,res)
})

module.exports = router;
