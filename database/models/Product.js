const Sequelize = require('sequelize');
const sequelize = require('../database');




const Pelicula = sequelize.define("Products",
        {
          id:{type: Sequelize.BIGINT(11)
        },
          category_id:{type: Sequelize.BIGINT(11)
        },
          model_id:{type: Sequelize.BIGINT(11)
        },
          shop_id:{type: Sequelize.BIGINT(11)
        },
          seller_id:{type: Sequelize.BIGINT(11)
        },
          name: {type: Sequelize.STRING},
          description: {type: Sequelize.STRING
        },
          color_id:{type: Sequelize.BIGINT(11)
        },
          price:{type: Sequelize.BIGINT(11)
        },
          discount_price:{type: Sequelize.BIGINT(11)
        },
          discount:{type: Sequelize.BIGINT(11)
        },
          quantity:{type: Sequelize.BIGINT(11)
        },
          sold_items:{type: Sequelize.BIGINT(11)
        },
          likes:{type: Sequelize.BIGINT(11)
        },
          status:{type: Sequelize.BOOLEAN
        },
          image:{type: Sequelize.STRING
        },
          creation_date:{type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        },
          update_date:{type: 'TIMESTAMP',
          defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        }
        },
        {
          tableName: 'Products',
          //Si el nombre de la tabla no coincide con el del modelo
          timestamps: true,
          //Si no tengo timestamps
        });

module.exports = Pelicula
