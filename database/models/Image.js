module.exports = (sequelize, DataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
}