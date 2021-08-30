const fs = require('fs');
const path = require('path');
const { re } = require('semver');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render("product", { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productId = req.params.id - 1
		res.render("productDetail", { product: products[productId] })
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("productCreation", { products })
	},

	// Create -  Method to store
	store: (req, res) => {
		let archivoProductosJson = fs.readFileSync("data/usersDataBase.json", { encoding: "utf-8" })
		
		let productos = JSON.parse(archivoProductosJson)
		
		let id = productos.lenght + 1;

		let producto = {
			id: id,
			name: req.body.name,
			model: req.body.model,
			description: req.body.description,
			image: req.file.image,
			colour: req.body.colour,
			price: req.body.price
		}
		productos.push(producto);

		let productosJSON = JSON.stringify(productos);
		res.send(req.body)
		// fs.writeFileSync("data/usersDataBase.json", productosJSON);
		// res.redirect("/")
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productId = req.params.id - 1
		res.render("productEdit", { product: products[productId] })
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
	}
};


module.exports = controller;