const fs = require('fs');
const path = require('path');
const { re } = require('semver');
const uniqid = require("uniqid");
const { Z_ASCII } = require('zlib');
var _ = require('lodash');
const db = require('../../database/models');
const Product = db.Product;
const Category = db.Category

const controller = {
	// Root - Show all products
	index: (req, res) => {
		Product.findAll({
			
		})
			.then(product => {
				return res.render('product', { product });
			})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		Product.findByPk(req.params.id, {})
		.then(product => { 
			res.render('productDetail', { product });
			}
		)
	},

	// Create - Form to create
	create: (req, res) => {

		Category.findAll()
            .then(categories => {
                return res.render('productCreation', { categories });
            })
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
			price: "$" + req.body.price
		}
		productos.push(producto);

		let productosJSON = JSON.stringify(productos);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosJSON);
		res.redirect("/product")
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productId = req.params.id
		res.render("productEdit", { product: products.find(x => x.id == productId) })
	},
	// Update - Method to update
	update: (req, res) => {

		let archivoProductosJson = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), { encoding: "utf-8" })
		let productos = JSON.parse(archivoProductosJson)

		let productId = req.params.id
		var filtered = _.remove(productos, (x => x.id == productId))

		let link = req.file.path.replace("public", "")
		let imageLink2 = link.replace("\\", "/")

		let producto = {
			id: uniqid("", "-product"),
			name: req.body.name,
			model: req.body.model,
			description: req.body.description,
			image: imageLink2,
			colour: req.body.colour,
			price: "$" + req.body.price
		}


		productos.push(producto);

		let productosJSON = JSON.stringify(productos);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosJSON);
		res.redirect("/product")
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		let archivoProductosJson = fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), { encoding: "utf-8" })
		let productos = JSON.parse(archivoProductosJson)
		let productId = req.params.id

		var filtered = _.remove(productos, (x => x.id == productId))

		let productosJSON = JSON.stringify(productos);

		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), productosJSON);
		res.redirect("/")
	}
};


module.exports = controller;