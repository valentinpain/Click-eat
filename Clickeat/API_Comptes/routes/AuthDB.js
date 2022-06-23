var express = require('express');
var router = express.Router();
var sequelize = require('../model/sequelize');
var ct = require('../controller/controller')

/* GET users listing. */
router.post('/user', function(req, res, next) {
    ct.userCreate(req,res)
});

router.put('/user', function (req, res, next){
    ct.userUpdate(req,res)
})

router.delete('/user', function (req, res, next) {
    ct.userDelete(req, res)
})

router.get('/user', function (req, res, next) {
    ct.userGet(req, res)
})

router.post('/login', function (req, res, next) {
    ct.userLogin(req, res)
})

router.get('/data', function (req, res, next) {
    ct.dataGet(req, res)
})

module.exports = router;
