module.exports = (sequelize, DataTypes) => {
  const ProductSize = sequelize.define(
    'ProductSize',
    {},
    { underscored: true }
  );

  ProductSize.associate = (db) => {
    ProductSize.belongsTo(
      db.Size,
      {
        foreignKey: 'sizeId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    ProductSize.belongsTo(
      db.Product,
      {
        foreignKey: 'productId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    ProductSize.hasMany(
      db.Bid,
      {
        foreignKey: 'productSizeId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return ProductSize;
};
