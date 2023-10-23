const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserForum extends Model {}

UserForum.init(
  {
    id:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    forum_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'forum',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_forum',
  }
);

module.exports = UserForum;
