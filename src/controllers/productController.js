var rn = require('random-number')
const db = require('../../database/models');
const Product = db.Product;
const Category = db.Category
const Spec = db.Spec
const Op = db.Sequelize.Op
const { validationResult } = require('express-validator');
const { validationError } = require('express-validator');
const { filter } = require('lodash');
const sessions = require('express-session');


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
			Product.findAll({
				where: {
					categories_id: categoryId
				}
			}).then((filtered) => {
				let products = "VACIO"
				return res.render('product', {
					product: products,
					categories: category,
					filtered: filtered
				});
			});
		})
	},
	// Detail - Detail from one product
	detail: (req, res) => {
		Product.findByPk(req.params.id)
			.then(i => {
				let product = i
				Spec.findAll({
					where: { products_id: req.params.id }
				})
					.then(spec => {
						res.render("productDetail", {
							product,
							spec
						})
					})
			})
	},
	fullCreation: (req, res) => {
		let cat1 = Product.findAll({ where: { categories_id: 1 } })
		let cat2 = Product.findAll({ where: { categories_id: 2 } })
		let cat3 = Product.findAll({ where: { categories_id: 3 } })
		let cat4 = Product.findAll({ where: { categories_id: 4 } })
		let cat5 = Product.findAll({ where: { categories_id: 5 } })
		let cat6 = Product.findAll({ where: { categories_id: 6 } })
		let cat7 = Product.findAll({ where: { categories_id: 7 } })
		let cat8 = Product.findAll({ where: { categories_id: 8 } })
		let cat9 = Product.findAll({ where: { categories_id: 9 } })
		let cat10 = Product.findAll({ where: { categories_id: 10 } })
		Promise.all([cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10])
			.then(function ([cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10]) {
				res.render('pcCreation', {
					ram: cat1,
					processor: cat2,
					graficCard: cat3,
					storage: cat4,
					powerSupply: cat5,
					motherboard: cat6,
					cabinet: cat7,
					monitor: cat8,
					keyboard: cat9,
					mouse: cat10
				})
			})
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
		let resultValidation = validationResult(req)
		if (resultValidation.errors.length > 0) {
			Category.findAll()
				.then(function (cat) {
					res.render("productCreation", {
						categories: cat,
						errors: resultValidation.mapped(),
						oldData: req.body
					})
				})
		} else {
			let link = req.file.path.replace("public", "")
			let imageLink2 = link.replace("\\", "/")

			let rawSpecs = [
				{
					id: rn({
						min: 1000,
						max: 1000000000000,
						integer: true
					})
				},
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
			for (let i = 0; i < 10; i++) {
				if (rawSpecs[i].specTitle !== "") {

					filteredSpecs.push(rawSpecs[i])
				}

			}
			let specs = JSON.stringify(filteredSpecs)

			Product.create({
				id: rn({
					min: 1,
					max: 20000000,
					integer: true
				}),
				categories_id: req.body.category,
				model_id: rn({
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
				specs: specs,
				color: req.body.colour,
				price: req.body.price,
				quantity: 1,
				status: true,
				image: imageLink2
			}).then(res.redirect("/product"))
				.catch(function (err) {
					// Mostrar detalles del error
					console.log(err, req.body.email);
				});
		}
	},

	// Update - Form to edit
	edit: (req, res) => {
		Product.findByPk(req.params.id)
			.then(i => {
				let product = i
				Spec.findAll({
					where: { products_id: req.params.id }
				})
					.then(spec => {
						res.render("productEdit", {
							product,
							spec
						})
					})
			})

		// res.render("productEdit", { product })
	},
	// Update - Method to update
	update: (req, res) => {
		// const resultValidation = validationResult(req)
		// if (resultValidation.errors.length > 0) {
		// 	let idS = req.params.id
		// 	let producto = Product.findByPk(req.params.id);
		// 	let categorias = Category.findAll()
		// 	Promise.all([producto, categorias])
		// 		.then(function ([producto, categorias]) {
		// 			res.render("productDetail", {
		// 				errors: resultValidation.mapped(),
		// 				producto: producto, categorias: categorias, idS: idS

		// 			})
		// 		})
		// } else {

		let link = req.file.path.replace("public", "")
		let imageLink2 = link.replace("\\", "/")

		Product.update({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			status: true,
			image: imageLink2
		}, { where: { id: req.params.id } })
			.then(a => {
				console.log(a)
				Product.findByPk(req.params.id)
					.then(productasd => {
						let product = productasd
						Spec.findAll({
							where: { products_id: req.params.id }
						})
							.then(spec => {
								res.render("productDetail", {
									product,
									spec
								})
							})
					})
			})
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		db.Product.destroy({
			where: { id: req.params.id }
		});
	},
}

module.exports = controller;