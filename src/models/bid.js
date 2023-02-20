module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define(
    'Bid',
    {
      price: DataTypes.DECIMAL(10, 2),
      expiredDate: DataTypes.DATE,
      equipment: DataTypes.BOOLEAN,
      type: DataTypes.ENUM('buyer', 'seller')
    },
    {
      underscored: true
    }
  );

  Bid.associate = (db) => {
    Bid.belongsTo(
      db.Order,
      {
        foreignKey: 'bidId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Bid.belongsTo(
      db.User,
      {
        foreignKey: 'userId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Bid.belongsTo(
      db.ProductSize,
      {
        foreignKey: 'productSizeId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Bid;
};
