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
>>>>>>> e52a35ced049539c696cdfb203be74684856a550
	},
}
module.exports = controller;