module.exports = (sequeliz, Sequelize) => {
    let alias = "Spec"
    let cols = {
      id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true
      },
      products_id: {
        type: Sequelize.BIGINT(11)
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    };
    let config = {
      tableName: 'specs',
      //Si el nombre de la tabla no coincide con el del modelo
      timestamps: false,
      //Si no tengo timestamps
    };
    const Spec = sequeliz.define(alias, cols, config)
  
    Spec.associate = function (models) {
      Spec.belongsTo(models.Product, {
        as: 'product',
        foreignKey: 'products_id'
      })
    }
    return Spec
  }