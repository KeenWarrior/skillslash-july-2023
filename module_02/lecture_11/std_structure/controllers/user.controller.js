const userServices = require("../services/user.service");

async function createUser(req, res) {
  try {
    const user = await userServices.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getUsers(req, res) {
  try {
    const users = await userServices.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getUserById(req, res) {
  try {
    const user = await userServices.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updateUser(req, res) {
  try {
    const user = await userServices.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await userServices.deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}
