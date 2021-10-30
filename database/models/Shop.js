module.exports = (sequeliz, Sequelize) => {
    let alias = "Shop"
    let cols = {
      id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true
      },
      admin_id: {
        type: Sequelize.BIGINT(11)
      },
      manager_id: {
        type: Sequelize.BIGINT(11)
      },
      name: {
        type: Sequelize.BIGINT(11)
      },
      address: {
        type: Sequelize.BIGINT(11)
      },
      products_count: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      sold_items: {
        type: Sequelize.BIGINT(11)
      }
    }
    let config = {
      tableName: 'shop',
      //Si el nombre de la tabla no coincide con el del modelo
      timestamps: false,
      //Si no tengo timestamps
    };
    const Shop = sequeliz.define(alias, cols, config)
    Shop.associate = function (models) {
      Shop.belongsTo(models.User, {
        as: 'admin',
        foreignKey: 'admin_id'
      });
      Shop.belongsTo(models.User, {
        as: 'manager',
        foreignKey: 'manager_id'
      }),
      Shop.hasMany(models.Product, {
        as: 'shop',
        foreignKey: 'shop_id'
      })
    }
  
    return Shop
  }