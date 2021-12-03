const db = require('../../database/models');
const Product = db.Product;
const Category = db.Category
const User = db.User
const Op = db.Sequelize.Op

const controller = {
    productList: (req, res) => {
        Product
            .findAll()
            .then(productos => {

                res.status(200).json({
                    count: productos.length,
                    products: productos.map(function (producto) {
                        return {
                            id: producto.id,
                            name: producto.name,
                            description: producto.description,
                            detail: "api/product/" + producto.id
                        }
                    }),
                    status: 200
                })
            })
    },
    productDetail: (req, res) => {
        Product
            .findByPk(req.params.id)
            .then(producto => {
                res.json({
                    id: producto.id,
                    name: producto.name,
                    description: producto.description,
                    color: producto.color,
                    price: producto.price,
                    cantidad: producto.quantity,
                    estado: producto.status,
                    image: producto.image,
                    categoryId: producto.categories_id,
                    modelId: producto.model_id,
                    sellerId: producto.seller_id
                })
            })
    },
    userList: function (req, res) {
        User
            .findAll()
            .then(lista => {
                res.json({
                    count: lista.length,
                    users: lista.map(function (usuario) {
                        return {
                            id: usuario.id,
                            name: usuario.full_name,
                            email: usuario.email,
                            detail: "/api/users/" + usuario.id
                        }
                    })

                })
            })
    },
    userDetail: function (req, res) {
        User
            .findByPk(req.params.id)
            .then(usuario => {
                res.json({
                    id: usuario.id,
                    fullName: usuario.full_name,
                    userName: usuario.username,
                    email: usuario.email,
                    imageUrl: usuario.photo
                })
            })
    },
    categoryList: function (req, res) {
        Category
            .findAll()
            .then(lista => {
                res.json({
                    count: lista.length,
                    categories: lista.map(function (categoria) {
                        return {
                            id: categoria.id,
                            name: categoria.name
                        }
                    })

                })
            })
    },
    categoryDetail: function (req, res) {
        Product
            .findAll()
            .then(productos => {
                res.json([
                    [1, "Memorias Ram", (productos.filter(function (producto) {
                        if (producto.categories_id == 1) {
                            return producto
                        }
                    })).length],
                    [2, "Gabinetes", (productos.filter(function (producto) {
                        if (producto.categories_id == 7) {
                            return producto
                        }
                    })).length],
                    [3, "Procesadores", (productos.filter(function (producto) {
                        if (producto.categories_id == 2) {
                            return producto
                        }
                    })).length],
                    [4, "Targetas Graficas", (productos.filter(function (producto) {
                        if (producto.categories_id == 3) {
                            return producto
                        }
                    })).length],
                    [5, "Almacenamiento", (productos.filter(function (producto) {
                        if (producto.categories_id == 4) {
                            return producto
                        }
                    })).length],
                    [6, "Fuente", (productos.filter(function (producto) {
                        if (producto.categories_id == 5) {
                            return producto
                        }
                    })).length],
                    [7, "Placas Madre", (productos.filter(function (producto) {
                        if (producto.categories_id == 6) {
                            return producto
                        }
                    })).length],

                    [8, "Monitores", (productos.filter(function (producto) {
                        if (producto.categories_id == 8) {
                            return producto
                        }
                    })).length],
                    [9, "Teclados", (productos.filter(function (producto) {
                        if (producto.categories_id == 9) {
                            return producto
                        }
                    })).length],
                    [10, "Mouse", (productos.filter(function (producto) {
                        if (producto.categories_id == 10) {
                            return producto
                        }
                    })).length]])
            })
    },
    productArray: (req, res) => {
        Product
            .findAll({
                include: [
                    { model: db.Category, as: 'category' }
                ],
            })
            .then(productos => {
                res.status(200).json(
                    productos.map(function (producto) {
                        return [
                            producto.id,
                            producto.name,
                            "$ " + producto.price
                        ]
                    })
                )
            })
    },
    userArray: function (req, res) {
        User
            .findAll()
            .then(usuarios => {
                res.status(200).json(
                    usuarios.map(function (user) {
                        return [
                            user.id,
                            user.full_name,
                            user.username
                        ]
                    })
                )
            })
    },
    pcCreation: (req, res) => {
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
                                                res.json({
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
    }
}
module.exports = controller;