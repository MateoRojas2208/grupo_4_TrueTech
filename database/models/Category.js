module.exports = (sequeliz, Sequelize) => {
  let alias = "Category"
  let cols = {
    id: {
      type: Sequelize.BIGINT(11),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  };
  let config = {
    tableName: 'Categories',
    //Si el nombre de la tabla no coincide con el del modelo
    timestamps: false,
    //Si no tengo timestamps
  };
  const ProductCategory = sequeliz.define(alias, cols, config)
  ProductCategory.associate = function (models) {
    ProductCategory.hasMany(models.Product, {
      as: 'category',
      foreignKey: 'categories_id'
    })
  }
  return ProductCategory
}