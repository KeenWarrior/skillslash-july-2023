const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
};

const createUser = async (req, res) => {
  const user = req.body;
  const createdUser = await User.create(user);
  res.send(createdUser);
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const latest = await User.findByIdAndUpdate(id, updates, {
    returnOriginal: false,
  });
  if (!latest) {
    res.status(404).send("User not found");
    return;
  } else {
    res.send(latest);
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    res.status(404).send("User not found");
    return;
  } else {
    res.send(user);
  }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
}
