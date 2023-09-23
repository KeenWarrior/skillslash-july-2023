const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const createUser = async (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return await User.create(user);
};

const getUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, user, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
};
