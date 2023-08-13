const User = require("../models/user.model");

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (user) => {
  const createdUser = await User.create(user);
  return createdUser;
};

const updateUserById = async (id, updates) => {
  const latest = await User.findByIdAndUpdate(id, updates, {
    returnOriginal: false,
  });
  return latest;
};

const deleteUserById = async (id) => {
  const user = await User.findByIdAndDelete(id);
  return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
}
