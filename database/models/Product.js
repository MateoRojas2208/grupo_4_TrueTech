module.exports = (sequeliz, Sequelize) => {
  let alias = "Product"
  let cols = {
    id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true
    },
    product_categories_id: {
      type: Sequelize.BIGINT(11)
    },
    model_id: {
      type: Sequelize.BIGINT(11)
    },
    shop_id: {
      type: Sequelize.BIGINT(11)
    },
    seller_id: {
      type: Sequelize.BIGINT(11)
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
  const product = sequeliz.define(alias, cols, config)

  return product
}