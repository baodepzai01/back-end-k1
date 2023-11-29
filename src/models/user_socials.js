'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_socials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_socials.init({
    userId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_socials',
  });
  return User_socials;
};