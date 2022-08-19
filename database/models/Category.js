module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        products_id: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        brand_category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }

    };

    let config = {
        tableName: 'category',
        timestamps: false,
        underscored: true
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_category_id',
            through: 'brand_category'
        });

        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id',
        });
    }

    return Category;
}