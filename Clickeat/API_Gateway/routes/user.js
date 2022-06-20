var express = require('express');
var router = express.Router();
var cors = require('cors');
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
    ct.userCreate(req,res)
})

module.exports = router;
