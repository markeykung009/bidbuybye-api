module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    'Brand',
    {
      title: DataTypes.STRING
    },
    { underscored: true }
  );

  Brand.associate = (db) => {
    Brand.hasMany(
      db.Product,
      {
        foreignKey: 'brandId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Brand;
};
