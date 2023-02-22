module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define(
    'Bid',
    {
      price: DataTypes.DECIMAL(10, 2),
      expiredDate: DataTypes.ENUM('7DAYS', '14DAYS', '30DAYS'),
      equipment: DataTypes.BOOLEAN,
      type: DataTypes.ENUM('BUYER', 'SELLER'),
      isSold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },

    {
      underscored: true
    }
  );

  Bid.associate = (db) => {
    Bid.hasMany(
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
