
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

  BrandModel.associate = function (models) {
    BrandModel.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'brand_id'
    }),
    BrandModel.hasMany(models.Product, {
      as: 'model',
      foreignKey: 'model_id'
    })
  }
  return BrandModel
}