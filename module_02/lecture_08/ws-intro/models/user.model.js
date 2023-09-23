const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define("Users", {
  uid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  picture: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
