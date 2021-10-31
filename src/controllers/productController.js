const fs = require('fs');
const path = require('path');
const { re } = require('semver');
const uniqid = require("uniqid");
const { Z_ASCII } = require('zlib');
var _ = require('lodash');
const db = require('../../database/models');
const { timeStamp } = require('console');
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
		Product.findByPk(req.params.id)
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

		let link = req.file.path.replace("public", "")
		let imageLink2 = link.replace("\\", "/")

		db.products.create({
			name: req.body.name,
			description: req.body.description,
			image: imageLink2,
			category: req.body.category,
			price: req.body.price,
			creation_date: timeStamp,
			update_date: timeStamp
		});

		res.redirect("/product")
	},

	// Update - Form to edit
	edit: (req, res) => {
		db.Product.findByPk(req.params.id)
			.then(product => {
				res.render("productEdit", { product })
			})

		// 
	},
	// Update - Method to update
	update: (req, res) => {

		db.Product.update(
			{
				name: req.body.name,
				description: req.body.description,
				image: imageLink2,
				category: req.body.category,
				price: req.body.price,
				creation_date: timeStamp,
				update_date: timeStamp
			},{
			where: {id: req.params.id}
		})
		res.redirect("/product")
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		db.Product.destroy({
			where: { id: req.params.id }
		});
	}
}

module.exports = controller;