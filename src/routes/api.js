const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');


 

// *****Apis products***//

router.get('/product', apiController.productList)
router.get('/productArray', apiController.productArray)
router.get('/product/:id', apiController.productDetail)

// *****Apis Users***//

router.get('/user', apiController.userList)
router.get('/userArray', apiController.userArray)
router.get('/user/:id', apiController.userDetail)

// *****Apis Category***//

router.get('/category', apiController.categoryList)
router.get('/category/productsxCategory', apiController.categoryDetail)

// *****Apis PcCreation***//

router.get('/pcCreation', apiController.pcCreation)

module.exports = router;