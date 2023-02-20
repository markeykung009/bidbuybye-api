module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profilePicture: DataTypes.STRING,
      mobilePhone: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      address: DataTypes.STRING,
      omiseId: {
        type: DataTypes.INTEGER,
        unique: true
      }
    },
    {
      underscored: true
    }
  );

  User.associate = (db) => {
    User.hasMany(
      db.Order,
      {
        foreignKey: 'userId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
    User.hasMany(
      db.Bid,
      {
        foreignKey: 'userId',
        allowNull: false
      },
      {
        onDelete: 'RESTRICT'
      }
    );
  };

  return User;
};
