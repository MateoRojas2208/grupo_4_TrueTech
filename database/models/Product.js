module.exports = (sequeliz, Sequelize) => {
  let alias = "Product"
  let cols = {
    id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true,
      autoIncrement: true
    },
    categories_id: {
      type: Sequelize.BIGINT(11),
      references: 'categories',
      referencesKey: 'id'
    },
    model_id: {
      type: Sequelize.BIGINT(11),
      references: 'model',
      referencesKey: 'id'
    },
    shop_id: {
      type: Sequelize.BIGINT(11),
      references: 'shop',
      referencesKey: 'id'
    },
    seller_id: {
      type: Sequelize.BIGINT(11),
      references: 'user',
      referencesKey: 'id'
    },
    specs: {
      type: Sequelize.JSON
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.BIGINT(11)
    },
    price: {
      type: Sequelize.BIGINT(11)
    },
    discount_price: {
      type: Sequelize.BIGINT(11)
    },
    discount: {
      type: Sequelize.BIGINT(11)
    },
    quantity: {
      type: Sequelize.BIGINT(11)
    },
    sold_items: {
      type: Sequelize.BIGINT(11)
    },
    likes: {
      type: Sequelize.BIGINT(11)
    },
    status: {
      type: Sequelize.BOOLEAN
    },
    image: {
      type: Sequelize.STRING
    },
    creation_date: {
      type: Sequelize.DATE
    },
    update_date: {
      type: Sequelize.DATE
    }
  };
  let config = {
    tableName: 'products',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
  };
  const Product = sequeliz.define(alias, cols, config)

  Product.associate = function (models) {
    Product.belongsTo(models.Shop, {
      as: 'shop',
      foreignKey: 'shop_id'
    }),
    Product.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'seller_id'
    }),
    Product.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categories_id'
    }),
    Product.belongsTo(models.BrandModel, {
      as: 'model',
      foreignKey: 'model_id'
    })
  }

  return Product
}