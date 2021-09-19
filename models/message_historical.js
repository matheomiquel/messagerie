'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message_historical extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  message_historical.init({
    action: DataTypes.ENUM('CREATED', 'UPDATED', 'DELETE'),
    message_id: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'message_historical',
    underscored: true
  });
  return message_historical;
};