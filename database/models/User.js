module.exports = (sequelize, DataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        users_products_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        user_type_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        picture_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {

        User.belongsTo(models.UserType, {
            as: 'user_type',
            foreignKey: 'user_type_id',
            through: 'user_type'
        });

        User.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'users_products_id',
            through: 'users_products',
            otherKey: 'users_products_id',
        });


        User.belongsTo(models.Picture, {
            as: 'picture',
            foreignKey: 'picture_id',
            through: 'picture'
        });

        User.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'user_id',
        });
    }

    return User;
}