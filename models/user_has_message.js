'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_has_message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user_has_message.init({
    user_id: DataTypes.STRING,
    message_id: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_has_message',
    underscored: true
  });
  return user_has_message;
};