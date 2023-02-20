module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define(
    'Size',
    { typeProduct: DataTypes.ENUM('shoes', 'apparel') },
    { underscored: true }
  );

  Size.associate = (db) => {
    Size.hasMany(
      db.Order,
      {
        foreignKey: 'sizeId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    Size.hasMany(
      db.ProductSize,
      {
        foreignKey: 'sizeId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Size;
};
