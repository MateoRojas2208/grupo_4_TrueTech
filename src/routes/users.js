// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const usersController = require("../controllers/usersController");
const fs = require("fs")
const path = require("path")
const usersFilePath = path.resolve(__dirname, '../database/users.json');
const { body } = require("express-validator")

// express-validator
const validations = [
    body("username")
    .notEmpty().withMessage("Nombre Invalido").bail()
    .isLength({min:3, max:15}).withMessage("Longitud: 3 a 15 Caracteres"),

    body("email")
    .notEmpty().withMessage("Email invalido").bail()
    .isEmail().withMessage("Formato Invalido")
    .custom(function(value) {
        let usersJSON = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        let users;
        if (usersJSON == "") {
            users = []
        } else {
            users = usersJSON
        }
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.email == value) {
                return false
            }
        }
        return true
    }).withMessage("Datos Incorrectos"),

    body("password")
    .notEmpty().withMessage("Contraseña invalida").bail()
    .isLength({min:4, max:15}).withMessage("Longitud: 4 a 15 Caracteres"),

    body("terminos")
    .notEmpty()
];


/* GET login page. */
router.get("/login", usersController.login);


/* GET register page */

router.get('/register', usersController.register);

/* POST register page */

router.post("/register", validations, usersController.createNewAccount);

/* GET profile page */

router.get('/profile', usersController.profile);



module.exports = router;
