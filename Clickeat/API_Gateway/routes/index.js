var express = require('express');
var router = express.Router();
const ct = require("../controller/controller")


router.post('/refreshToken', async function (req, res, next) {
    ct.refreshToken(req,res)
});

router.post('/logout', async function (req, res, next) {
    ct.logout(req,res)
});

router.all('/api/:apiName', async function (req, res, next) {
    ct.transfer(req,res)
})

router.get('/log', async function (req, res, next) {
    ct.getLog(req, res)
})

module.exports = router;