module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: DataTypes.STRING,
      skuProduct: DataTypes.STRING,
      color: DataTypes.STRING,
      ProductImage: DataTypes.STRING
    },
    {
      underscored: true
    }
  );

  Product.associate = (db) => {
    Product.belongsTo(
      db.Brand,
      {
        foreignKey: 'brandId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Product.hasMany(
      db.Order,
      {
        foreignKey: 'productId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Product.hasMany(
      db.ProductSize,
      {
        foreignKey: 'productId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Product.hasMany(
      db.Category,
      {
        foreignKey: 'categoryId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Product;
};
