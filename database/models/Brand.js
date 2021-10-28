module.exports = (sequeliz, Sequelize) => {
    let alias = "Brand"
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
      tableName: 'brands',
      //Si el nombre de la tabla no coincide con el del modelo
      timestamps: false,
      //Si no tengo timestamps
    };
    const brand = sequeliz.define(alias, cols, config)
    
    return brand
  }