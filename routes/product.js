
// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");


// ************ Controller Require ************
const productsController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post('/', productsController.store);


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);


// /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);


// Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/productos'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
  const uploadFile = multer({ storage});
  
  router.post("/photo", uploadFile.single("imagenProducto"), productsController.upload);

module.exports = router;