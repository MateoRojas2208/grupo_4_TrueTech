const fs = require('fs');
const path = require('path');
const { re } = require('semver');
var rn = require('random-number')
const { Z_ASCII } = require('zlib');
var _ = require('lodash');
const db = require('../../database/models');
const { timeStamp } = require('console');
const { search } = require('../routes/product');
const Product = db.Product;
const Category = db.Category
const Op = db.Sequelize.Op

const controller = {
	// Root - Show all products
	index: (req, res) => {
		Category.findAll()
			.then(i => {
				var category = i;
				var filtered = "VACIO";
				Product.findAll()
					.then(products => {
						return res.render('product', {
							product: products,
							categories: category,
							filtered: filtered
						});
					})
			});

	},

	// Show some products (search filter)
	indexSearch: (req, res) => {
		var searchName = req.body.search

		Category.findAll()
			.then(i => {
				var category = i;
				let products = "VACIO"
				Product.findAll({
					where: {
						name: { [Op.like]: `%${searchName}%` }
					}
				})
					.then(filtere => {
						return res.render('product', {
							product: products,
							categories: category,
							filtered: filtere
						});
					})
			})
	},


	// Show some products (category filter)
	indexFilter: (req, res) => {
		var categoryId = req.params.id
		Category.findAll().then(i => {
			var category = i
			Product.findOne({
				where: {
					categories_id: categoryId
				}
			}).then((filtered) => {
				let products = "VACIO"
				return res.render('product', {
					product: products,
					categories: category,
					filtered: [filtered]
				});
			});
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

		let specs = [
			{
				specTitle: req.body.specT1,
				specDescription: req.body.specD1
			},
			{
				specTitle: req.body.specT2,
				specDescription: req.body.specD2
			},
			{
				specTitle: req.body.specT3,
				specDescription: req.body.specD3
			},
			{
				specTitle: req.body.specT4,
				specDescription: req.body.specD4
			},
			{
				specTitle: req.body.specT5,
				specDescription: req.body.specD5
			},
			{
				specTitle: req.body.specT6,
				specDescription: req.body.specD6
			},
			{
				specTitle: req.body.specT7,
				specDescription: req.body.specD7
			},
			{
				specTitle: req.body.specT8,
				specDescription: req.body.specD8
			},
			{
				specTitle: req.body.specT9,
				specDescription: req.body.specD9
			},
			{
				specTitle: req.body.specT10,
				specDescription: req.body.specD10
			}

		]
		var filteredSpecs = []
		for (let i=0;i<10;i++){
			if (specs[i].specTitle !== ""){

				filteredSpecs.push(specs[i])
			}
			
		}
		let a = `hola ${filteredSpecs[1].specTitle}`
		console.log(a)

		// Product.create({
		// 	id: rn({
		// 		min: 1000,
		// 		max: 1000000000000,
		// 		integer: true
		// 	}),
		// 	categories_id: req.body.category,
		// 	model_id: rn({
		// 		min: 1,
		// 		max: 20,
		// 		integer: true
		// 	}),
		// 	shop_id: rn({
		// 		min: 1,
		// 		max: 20,
		// 		integer: true
		// 	}),
		// 	seller_id: rn({
		// 		min: 1,
		// 		max: 20,
		// 		integer: true
		// 	}),
		// 	name: req.body.name,
		// 	description: req.body.description,
		// 	specs: filteredSpecs,
		// 	color: req.body.colour,
		// 	price: req.body.price,
		// 	discount_price: 0,
		// 	discount: 0,
		// 	quantity: 1,
		// 	sold_items: 0,
		// 	likes: 0,
		// 	status: true,
		// 	image: imageLink2
		// }).then(res.redirect("/product"))

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