
// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
 router.get('/creation', productsController.create); 
//  router.???('/', productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/detail', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
// router.put('/:id/???', productsController.edit); 
// router.???('/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;