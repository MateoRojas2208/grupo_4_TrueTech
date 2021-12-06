const fs = require('fs');
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
	},
}
module.exports = controller