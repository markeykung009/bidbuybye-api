module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING

        // validate: {
        //   notEmpty: true
        // }
      },
      lastName: {
        type: DataTypes.STRING

        // validate: {
        //   notEmpty: true
        // }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      profilePicture: DataTypes.STRING,
      mobilePhone: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      address: DataTypes.STRING,
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      omiseId: DataTypes.STRING
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
