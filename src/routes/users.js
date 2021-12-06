// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const fs = require("fs")
const path = require("path")
const usersFilePath = path.resolve(__dirname, '../database/users.json');
const { body } = require("express-validator")


const logged = require("../middlewares/loggedMiddleware")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, './public/images/users');
    },
    filename: function (req, file, cb) {
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
 })

 const uploadFile = multer({ storage });

// express-validator
const validations = [
   body("name").notEmpty().withMessage("El campo no puede estar vacio").isLength({ min: 5 }).withMessage("El nombre debe tener como minimo 3 letras").escape(),
   body("email").notEmpty().withMessage("El campo no puede estar vacio").bail().isEmail().withMessage("Tenes que escribir un formato de correo valido").trim().escape().normalizeEmail(),
   body("password").notEmpty().withMessage("El campo no puede estar vacio")
   .bail().isStrongPassword(
     { minLength: 8, minLowercase: 1, minUppercase: 0, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
   )
   .withMessage("La contraseña debe tener al menos 8 caracteres y contener letras y numeros").escape().trim(),
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


/* GET login page. */
router.get("/login", usersController.login);

/* POST login page */

router.post("/login", usersController.enter)

/* GET register page */

router.get('/register', usersController.register);

/* POST register page */

router.post("/register", uploadFile.single("image"), validations, usersController.createNewAccount);

/* GET profile page */

router.get('/profile',logged, usersController.profile);
router.get('/profile/Edit',logged, usersController.profileEdit);
router.post('/profile/save', usersController.profileSave);


module.exports = router;
