const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');


 

// *****Apis products***//

router.get('/product', apiController.productList)
router.get('/product/:id', apiController.productDetail)

// *****Apis Users***//

router.get('/user', apiController.userList)
router.get('/user/:id', apiController.userDetail)

module.exports = router;