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
        timestamps: true,
        underscored: true
    };

    const Category = sequelize.define(alias, cols, config);
}