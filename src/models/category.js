module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      typeProduct: DataTypes.STRING
    },
    {
      underscored: true
    }
  );

  Category.associate = (db) => {
    Category.belongsTo(
      db.Product,
      {
        foreignKey: 'catagoryId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return Category;
};
