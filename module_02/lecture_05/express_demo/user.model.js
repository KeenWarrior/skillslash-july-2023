const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER
});

module.exports = User;
