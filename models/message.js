'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.message, {
        as: 'parent',
        targetKey: 'id',
        foreignKey: 'message_id'
      });
      this.hasMany(models.message, {
        as: 'child',
        targetKey: 'message_id',
        sourceKey: 'id'
      });
    }
  };
  message.init({
    message_id: {
      field: 'message_id',
      type: DataTypes.INTEGER,
    },
    content: DataTypes.STRING,
    read: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'message',
    underscored: true
  });
  return message;
};