module.exports = (sequelize, DataTypes) => {
  const OrderStatus = sequelize.define(
    'OrderStatus',
    {
      status: DataTypes.ENUM(
        'WAITING',
        'CONFIRMED',
        'ARRIVED',
        'VERIFIED',
        'SHIPPED',
        'COMPLETED'
      ),
      date: DataTypes.DATE
    },
    { underscored: true }
  );

  OrderStatus.associate = (db) => {
    OrderStatus.belongsTo(
      db.Order,
      {
        foreignKey: 'orderId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return OrderStatus;
};
