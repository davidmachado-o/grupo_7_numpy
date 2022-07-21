module.exports = (sequelize, DataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        products_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        image_1: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        image_2: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        image_3: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }

    };

    let config = {
        tableName: 'image',
        timestamps: true,
        underscored: true
    };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = function(models) {
        Image.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'products_id',
            through: 'products',
        });
    };

    return Image;
}