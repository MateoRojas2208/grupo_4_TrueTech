const fs = require('fs');
<<<<<<< HEAD
const path = require('path'); 
const db = require('../../database/models');
const Product = db.Product;

const controller = {
    home: (req, res) => {
		Product.findAll().then(a => {
			let logeado = req.session.isLogged
			res.render("home", {product: a})
		})
		
=======
const path = require('path');
const db = require('../../database/models');
const Product = db.Product;
let main;
const controller = {
    home: (req, res) => {
		Product.findAll().then(a => {
            let logeado = req.session.isLogged
            res.render("home", {product: a})
        })
>>>>>>> 2919f3e25cdbb73c6e0e90c544f5b06b169917a0
	},
}
module.exports = controller;