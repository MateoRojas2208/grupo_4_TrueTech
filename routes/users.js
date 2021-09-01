// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");


// ************ Controller Require ************
const usersController = require('../controllers/usersController');


/* GET register page. */
router.get('/login', usersController.login);


/* GET login page */

router.get('/register', usersController.register);




module.exports = router;
