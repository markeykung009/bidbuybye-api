module.exports = (sequelize, DataTypes) => {
  const Catergory = sequelize.define(
    'Catergory',
    { typeProduct: DataTypes.STRING },
    { underscored: true }
  );

  Catergory.associate = (db) => {
    Catergory.hasMany(
      db.Product,
      {
        foreignKey: 'catergoryId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Catergory;
};
