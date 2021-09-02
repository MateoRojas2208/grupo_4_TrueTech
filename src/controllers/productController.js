const fs = require('fs');
const path = require('path');
const { re } = require('semver');
const uniqid = require("uniqid");
const { Z_ASCII } = require('zlib');
var _ = require('lodash');
var array = require('lodash/array')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller = {
	// Root - Show all products
	index: (req, res) => {

		let archivoProductosJson = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), { encoding: "utf-8" })
		let productos = JSON.parse(archivoProductosJson)
		let productosSin0 = productos.shift()
		res.render("product", { productos })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let productId = req.params.id
		res.render("productDetail",  { product: products.find(x => x.id == productId)})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render("productCreation", { products })
	},

	// Create -  Method to store
	store: (req, res) => {
		let archivoProductosJson = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), { encoding: "utf-8" })
		
		let productos = JSON.parse(archivoProductosJson)
		
		let link = req.file.path.replace("public", "")
		let imageLink2 = link.replace("\\", "/")
		let producto = {
			id: uniqid("", "-product"),
			name: req.body.name,
			model: req.body.model,
			description: req.body.description,
			image: imageLink2,
			colour: req.body.colour,
			price: req.body.price
		}
		productos.push(producto);

		let productosJSON = JSON.stringify(productos);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosJSON);
		res.redirect("/product")
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productId = req.params.id
		res.render("productEdit", { product: products.find(x => x.id == productId)})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let archivoProductosJson = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), { encoding: "utf-8" })
		let productos = JSON.parse(archivoProductosJson)
		let productId = req.params.id

		var filtered = _.remove(productos, (x => x.id == productId) )

		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productos);
		res.render("/")
	}
};


module.exports = controller;