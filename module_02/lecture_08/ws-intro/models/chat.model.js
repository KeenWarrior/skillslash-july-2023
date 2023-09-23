const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Chat = sequelize.define("Chats", {
  uid: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  picture: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
  timestamp: {
    type: DataTypes.DATE,
  },
});

module.exports = Chat;
