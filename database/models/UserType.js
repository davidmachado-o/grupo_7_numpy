module.exports = (sequelize, DataTypes) => {
    let alias = 'UserType';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
        };

    let config = {
        tableName: 'user_type',
        timestamps: false,
        underscored: true
    };

    const UserType = sequelize.define(alias, cols, config);

    UserType.associate = function(models) {
        UserType.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_type_id',
        });
    };

    return UserType;
}