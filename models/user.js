'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends Model{
    
  }




  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    birth: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};