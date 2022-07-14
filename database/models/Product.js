module.exports = (sequelize, DataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        processor: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        memory: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        storage: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        price_current: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        price_discount: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        stock: {
            type: DataTypes.STRING(11),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updated_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        }
        }
    
    let config = {
        tableName: 'products',
        timestamps: true,
        underscored: true
    };
    
    const Product = sequelize.define(alias, cols, config);
}