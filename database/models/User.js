module.exports = (sequelize, DataTypes) => {
    let alias = 'Users';
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
            type: DataTypes.INTEGER(11),
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
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    };

    let config = {
        tableName: 'users',
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}