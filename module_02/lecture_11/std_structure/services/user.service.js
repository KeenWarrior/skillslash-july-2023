const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function createUser(user) {
  user.password = bcrypt.hashSync(user.password, 10);
  return await User.create(user);
}

async function getUsers() {
  try {
    return await User.find();
  } catch (error) {
    throw new Error(error);
  }
}

async function getUserById(id) {
  try {
    return await User.findById(id);
  } catch (error) {
    throw new Error(error);
  }
}

async function getUserByEmail(email) {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw new Error(error);
  }
}

async function updateUser(id, user) {
  try {
    return await User.findByIdAndUpdate(id, user, { new: true });
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteUser(id) {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail
};
