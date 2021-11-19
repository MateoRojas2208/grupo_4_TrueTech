
// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const authMiddleware = require("../middlewares/authMiddleware");
const { body } = require("express-validator");


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
// ******************** Validaciones *********************

const validations = [
  body("category").notEmpty().withMessage("El campo no puede estar vacio"),
  body("name").notEmpty().withMessage("El campo no puede estar vacio"),
  body("description").notEmpty().withMessage("El campo no puede estar vacio"),
  body("specT1").notEmpty().withMessage("El campo no puede estar vacio"),
  body("specD1").notEmpty().withMessage("El campo no puede estar vacio"),
  body("colour").notEmpty().withMessage("El campo no puede estar vacio"),
  body("price").notEmpty().withMessage("El campo no puede estar vacio"),
  body("model").notEmpty().withMessage("El campo no puede estar vacio"),
  body("image").custom((value, {req})=>{
    if(req.file){
      let file = req.file.originalname

      let acceptedExt = [".png", ".jpg", ".jpeg"]
      let extension = (path.extname(file)).toLowerCase();
      if(!acceptedExt.includes(extension))
      throw new Error("este tipo de archivo no esta permitido");
    }


    return true
  })
]

// ******************  RUTAS  *******************

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);
//***GET SOME PRODUCTS ***/ 
router.post("/search", productsController.indexSearch)
router.get("/filter/:id", productsController.indexFilter)

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create);
router.post("/creation", uploadFile.single("image"), validations, productsController.store);


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit);
router.post('/update/:id', uploadFile.single("image"), validations, productsController.update);


// /*** DELETE ONE PRODUCT***/ 
router.post('/destroy/:id', productsController.destroy);





module.exports = router;
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa para que deje poner nombre en el comit