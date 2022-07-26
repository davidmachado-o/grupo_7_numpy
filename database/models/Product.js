module.exports = (sequelize, DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        users_products_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        order_details_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        updated_at: {
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

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id',
            through: 'category'
        });

        Product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_id',
            through: 'brand'
        });

        // Product.belongsTo(models.Users, {
        //     as: 'user',
        //     through: 'users_products',
        //     foreignKey: 'users_products_id',
        //     otherKey: 'products_id',
        //     timestamps: false
        // });

        Product.belongsTo(models.Order, {
            as: 'order_details',
            foreignKey: 'order_details_id',
            through: 'order_details'
        }
        );

        Product.belongsToMany(models.Image, {
            as: 'image',
            foreignKey: 'products_id',
            through: 'products'
        });
    }

    return Product;
}