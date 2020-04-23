'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cabang = sequelize.define('Cabang', {
    RestaurantId: DataTypes.INTEGER,
    cabang: DataTypes.INTEGER,
    no_telp: DataTypes.INTEGER,
    alamat: DataTypes.STRING
  }, {});
  Cabang.associate = function(models) {
    // associations can be defined here
  };
  return Cabang;
};