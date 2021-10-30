module.exports = (sequeliz, Sequelize) => {
    let alias = "User"
    let cols = {
      id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true
      },
      full_name: {
        type: Sequelize.BIGINT(11)
      },
      username: {
        type: Sequelize.BIGINT(11)
      },
      email: {
        type: Sequelize.BIGINT(11)
      },
      password: {
        type: Sequelize.BIGINT(11)
      },
      clearence: {
        type: Sequelize.STRING
      }
    }
    let config = {
      tableName: 'users',
      //Si el nombre de la tabla no coincide con el del modelo
      timestamps: false,
      //Si no tengo timestamps
    };
    const User = sequeliz.define(alias, cols, config)
    User.associate = function (models) {
      User.hasMany(models.Shop, {
        as: 'admin',
        foreignKey: 'admin_id'
      });
      User.hasMany(models.Shop, {
        as: 'manager',
        foreignKey: 'manager_id'
      }),
      User.hasMany(models.Product, {
        as: 'seller',
        foreignKey: 'seller_id'
      })
    }
  
    return User
  }