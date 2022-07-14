module.exports = (sequelize, DataTypes) => {
    let alias = 'Orders';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        order_status: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }

    };

    let config = {
        tableName: 'orders',
        timestamps: true,
        underscored: true
    };

    const Order = sequelize.define(alias, cols, config);
}