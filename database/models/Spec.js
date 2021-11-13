module.exports = (sequeliz, Sequelize) => {
    let alias = "Spec"
    let cols = {
        id: {
            type: Sequelize.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
          },
        spec1:{
            type: Sequelize.STRING
        },
        spec2:{
            type: Sequelize.STRING
        },
        spec3:{
            type: Sequelize.STRING
        },
        spec4:{
            type: Sequelize.STRING
        },
        spec5:{
            type: Sequelize.STRING
        },
        spec6:{
            type: Sequelize.STRING
        },
        spec7:{
            type: Sequelize.STRING
        },
        spec8:{
            type: Sequelize.STRING
        },
        spec9:{
            type: Sequelize.STRING
        },
        spec10:{
            type: Sequelize.STRING
        }
    }
    let config = {
        tableName: 'specs',
        // Si el nombre de la tabla no coincide con el del modelo
        timestamps: false,
        //Si no tengo timestamps
      };
    const Spec = sequeliz.define(alias, cols, config)
    Spec.associate = function (models) {
        Spec.hasMany(models.Product, {
          as: 'specs',
          foreignKey: 'specs_id'
        })}
    return Spec
}