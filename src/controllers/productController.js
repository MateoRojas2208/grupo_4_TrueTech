var rn = require('random-number')
const db = require('../../database/models');
const Product = db.Product;
const Category = db.Category
const Spec = db.Spec
const Op = db.Sequelize.Op
const { validationResult } = require('express-validator');
const { validationError } = require('express-validator');
const { filter } = require('lodash');

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
			.then(i => {
				let product = i
				Spec.findAll({
					where: { products_id: 1 }
				})
					.then(spec => {
						// console.log(spec)
						res.render("productDetail", {
							product,
							spec
						})
					})
			})
	},
	fullCreation: (req, res) => {
		Product.findAll({
			where: {
				categories_id: 1
			}
		}).then(cat1 => {
			var categoy1 = cat1
			Product.findAll({
				where: {
					categories_id: 2
				}
			}).then(cat2 => {
				var categoy2 = cat2
				Product.findAll({
					where: {
						categories_id: 3
					}
				}).then(cat3 => {
					var categoy3 = cat3
					Product.findAll({
						where: {
							categories_id: 4
						}
					}).then(cat4 => {
						var categoy4 = cat4
						Product.findAll({
							where: {
								categories_id: 5
							}
						}).then(cat5 => {
							var categoy5 = cat5
							Product.findAll({
								where: {
									categories_id: 6
								}
							}).then(cat6 => {
								var categoy6 = cat6
								Product.findAll({
									where: {
										categories_id: 7
									}
								}).then(cat7 => {
									var categoy7 = cat7
									Product.findAll({
										where: {
											categories_id: 8
										}
									}).then(cat8 => {
										var categoy8 = cat8
										Product.findAll({
											where: {
												categories_id: 9
											}
										}).then(cat9 => {
											var categoy9 = cat9
											Product.findAll({
												where: {
													categories_id: 10
												}
											}).then(cat10 => {
												var categoy10 = cat10
												res.render('pcCreation', {
													ram: categoy1,
													processor: categoy2,
													graficCard: categoy3,
													storage: categoy4,
													powerSupply: categoy5,
													motherboard: categoy6,
													cabinet: categoy7,
													monitor: categoy8,
													keyboard: categoy9,
													mouse: categoy10
												})
											})
										})
									})
								})
							})
						})
					})
				})
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
			console.log(specs)

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
				Spec
			})

		// res.render("productEdit", { product })
	},
	// Update - Method to update
	update: (req, res) => {
		const resultValidation = validationResult(req)
		if (resultValidation.errors.length > 0) {

			let idS = req.params.id
			let producto = db.products.findByPk(req.params.id);
			let categorias = db.categories.findAll()
			Promise.all([producto, categorias])
				.then(function ([producto, categorias]) {
					res.render("./products/editProduct", {
						errors: resultValidation.mapped(),
						producto: producto, categorias: categorias, idS: idS

					})
				})
		} else {

			let link = req.file.path.replace("public", "")
			let imageLink2 = link.replace("\\", "/")

			db.Product.update({
				name: req.body.name,
				description: req.body.description,
				color: req.body.colour,
				price: req.body.price,
				quantity: 1,
				status: true,
				image: imageLink2
			}, {
				where: { id: req.params.id }
			}).then(res.redirect("/product"))
		}
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		db.Product.destroy({
			where: { id: req.params.id }
		});
	},
}

module.exports = controller;