module.exports = (sequelize, DataTypes) => {
    let alias = 'Pictures';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
}