module.exports = (sequelize, DataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    };

    let config = {
        tableName: 'brand',
        timestamps: true,
        underscored: true
    };

    const Brand = sequelize.define(alias, cols, config);
}