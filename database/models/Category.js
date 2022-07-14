module.exports = (sequelize, DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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