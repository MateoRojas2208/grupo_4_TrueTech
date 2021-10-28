module.exports = (sequeliz, Sequelize) => {
    let alias = "ProductCategory"
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
      tableName: 'product_Categories',
      //Si el nombre de la tabla no coincide con el del modelo
      timestamps: false,
      //Si no tengo timestamps
    };
    const ProductCategory = sequeliz.define(alias, cols, config)
    
    return ProductCategory
}