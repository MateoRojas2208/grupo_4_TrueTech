module.exports = (sequeliz, Sequelize) => {
    let alias = "User"
    let cols = {
      id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
      },
      full_name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
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
      User.hasMany(models.Product, {
        as: 'seller',
        foreignKey: 'seller_id'
      })
    }
  
    return User
  }