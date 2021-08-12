var express = require('express');
var router = express.Router();

/* GET home */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
// /* GET carrito */
// router.get('/carrito', function(req, res, next) {
//   res.render('carrito', { title: 'Express' });
// });

/* GET detalle producto */
router.get('/detalle-producto', function(req, res, next) {
  res.render('detalle-producto', { title: 'Express' });
});
/* GET login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
/* GET register */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
module.exports = router;
