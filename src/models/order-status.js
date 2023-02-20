module.exports = (sequelize, DataTypes) => {
  const OrderStatus = sequelize.define(
    'OrderStatus',
    {
      status: DataTypes.ENUM(
        'confirmed',
        'arrivedStore',
        'verified',
        'shipped',
        'completed'
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
