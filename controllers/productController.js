const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("product",{products})
    },

	// Detail - Detail from one product
	detail: (req, res) => {
		let productId = req.params.id -1
		res.render("productDetail",{product: products[productId]})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("productCreation",{products})
	},
	
	// Create -  Method to store
	store: (req, res) => {
		
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;