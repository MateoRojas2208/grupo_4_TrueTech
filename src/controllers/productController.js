const fs = require('fs');
const path = require('path');
const { re } = require('semver');
var rn = require('random-number')
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

		Product.create({
			id: rn({
				min: 1000,
				max: 1000000000000,
				integer: true
			}),
			categories_id: req.body.category,
			model_id: rn({
				min: 1,
				max: 20,
				integer: true
			}) ,
			shop_id: rn({
				min: 1,
				max: 20,
				integer: true
			}),
			seller_id: rn({
				min: 1,
				max: 20,
				integer: true
			}),
			name: req.body.name,
			description: req.body.description,
			color: req.body.colour,
			price: req.body.price,
			discount_price: 0,
			discount: 0,
			quantity: 1,
			sold_items: 0,
			likes: 0,
			status: true,
			image: imageLink2
		}).then(res.redirect("/product"))
		// console.log()
		
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

		let link = req.file.path.replace("public", "")
		let imageLink2 = link.replace("\\", "/")

		db.Product.update({
				name: req.body.name,
				description: req.body.description,
				color: req.body.colour,
				price: req.body.price,
				discount_price: 0,
				discount: 0,
				quantity: 1,
				status: true,
				image: imageLink2
			}, {
			where: { id: req.params.id }
		}).then(res.redirect("/product"))
		
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		db.Product.destroy({
			where: { id: req.params.id }
		});
	}
}

module.exports = controller;