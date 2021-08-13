var express = require('express');
var router = express.Router();

/* GET carrito */
router.get('/', function(req, res, next) {
  res.render('productDetail', { title: 'Express' });
});

module.exports = router;