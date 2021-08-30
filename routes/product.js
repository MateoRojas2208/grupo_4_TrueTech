
// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");


// ************ Controller Require ************
const productsController = require('../controllers/productController');

// ************ MULTER *****************
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, './public/images/productos');
   },
   filename: function (req, file, cb) {
      cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
   }
})

const uploadFile = multer({ storage });

// ******************  RUTAS  *******************

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post("/creation", uploadFile.single("imagenProducto"), productsController.store);


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);


// /*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);






module.exports = router;
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa para que deje poner nombre en el comit