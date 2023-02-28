module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      transactionId: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {
      underscored: true
    }
  );

  Order.associate = (db) => {
    Order.belongsTo(
      db.Bid,
      {
        foreignKey: 'bidId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Order.belongsTo(
      db.User,
      {
        foreignKey: 'userId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Order.belongsTo(
      db.Size,
      {
        foreignKey: 'sizeId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Order.belongsTo(
      db.Product,
      {
        foreignKey: 'ProductId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Order.hasMany(
      db.OrderStatus,
      {
        foreignKey: 'orderId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Order;
};
