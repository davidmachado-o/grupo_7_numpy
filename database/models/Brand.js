module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        brand_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    };

    let config = {
        tableName: 'brand',
        timestamps: false,
        underscored: true
    };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models) {
        Brand.belongsTo(models.Category, {
            as: 'brand_category',
            foreignKey: 'brand_category_id',
            through: 'brand_category'
        });

        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id',
        });
    }

    return Brand;
}