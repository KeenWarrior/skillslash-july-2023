const { use } = require("../app");
const usersService = require("../services/users.service");

const getAllUsers = async (req, res) => {
  const users = await usersService.getAllUsers();
  res.send(users);
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getUserById(id);
  res.send(user);
};

const createUser = async (req, res) => {
  const user = req.body;
  const createdUser = await usersService.createUser(user);
  res.send(createdUser);
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const latest = await usersService.updateUserById(id, updates);
  if (!latest) {
    res.status(404).send("User not found");
    return;
  } else {
    res.send(latest);
  }
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await usersService.deleteUserById(id);
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
