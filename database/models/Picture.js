module.exports = (sequelize, DataTypes) => {
    let alias = 'Pictures';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
        };

    let config = {
        tableName: 'picture',
        timestamps: true,
        underscored: true
    };

    const Picture = sequelize.define(alias, cols, config);

    Picture.associate = function(models) {
        Picture.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'users_id',
            through: 'users'
        });
    };

    return Picture;
}