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
                    countByCategory: {
                        MemoriasRam: (productos.filter(function (producto) {
                            if (producto.categories_id == 1) {
                                return producto
                            }
                        })).length,
                        Procesadores: (productos.filter(function (producto) {
                            if (producto.categories_id == 2) {
                                return producto
                            }
                        })).length,
                        TargetasGraficas: (productos.filter(function (producto) {
                            if (producto.categories_id == 3) {
                                return producto
                            }
                        })).length,
                        Almacenamiento:
                            (productos.filter(function (producto) {
                                if (producto.categories_id == 4) {
                                    return producto
                                }
                            })).length,
                        Fuente: (productos.filter(function (producto) {
                            if (producto.categories_id == 5) {
                                return producto
                            }
                        })).length,
                        PlacasMadre: (productos.filter(function (producto) {
                            if (producto.categories_id == 6) {
                                return producto
                            }
                        })).length,
                        Gabinetes: (productos.filter(function (producto) {
                            if (producto.categories_id == 7) {
                                return producto
                            }
                        })).length,
                        Monitores: (productos.filter(function (producto) {
                            if (producto.categories_id == 8) {
                                return producto
                            }
                        })).length,
                        Teclados: (productos.filter(function (producto) {
                            if (producto.categories_id == 9) {
                                return producto
                            }
                        })).length,
                        Mouse: (productos.filter(function (producto) {
                            if (producto.categories_id == 10) {
                                return producto
                            }
                        })).length
                    },
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
            .then(usuario =>{
                res.json({
                    id: usuario.id,
                    fullName: usuario.full_name,
                    userName: usuario.username,
                    email: usuario.email,
                    imageUrl: usuario.photo
                })
            })
    },
}
module.exports = controller;