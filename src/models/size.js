module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define(
    'Size',
    { sizeProduct: DataTypes.STRING, label: DataTypes.STRING },
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
