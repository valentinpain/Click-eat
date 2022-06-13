var express = require('express');
const commandesModel = require('../conf/schemaCommand');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    commandesModel.find({}, (err, data) => {
      if(err) console.log(err)
      else {
        res.send(data)
      }
    });
  });

module.exports = router;
