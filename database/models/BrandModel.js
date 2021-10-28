module.exports = (sequeliz, Sequelize) => {
    let alias = "BrandModel"
    let cols = {
      id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true
      },
      brand_id: {
        type: Sequelize.BIGINT(11)
      },
      name: {
        type: Sequelize.STRING
      }
    };
    let config = {
      tableName: 'brand_models',
      //Si el nombre de la tabla no coincide con el del modelo
      timestamps: false,
      //Si no tengo timestamps
    };
    const BrandModel = sequeliz.define(alias, cols, config)
  
    return BrandModel
  }