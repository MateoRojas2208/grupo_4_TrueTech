var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/carrito', function(req, res, next) {
  res.render('carrito', { title: 'Express' });
});
router.get('/detalle-producto', function(req, res, next) {
  res.render('detalle-producto', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
module.exports = router;
