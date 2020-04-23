'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model

  class User extends Model{

  }

  User.init({
    name: DataTypes.STRING,
    birth: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Cabang,{
      through:models.Review ,foreignKey:'UserId'})
  };
  return User;
};