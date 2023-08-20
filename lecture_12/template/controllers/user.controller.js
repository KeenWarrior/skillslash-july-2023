const userServices = require("../services/user.service");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const createUser = catchAsync(async (req, res) => {
  const user = await userServices.createUser(req.body);
  res.status(201).json(user);
});

const getUsers = catchAsync(async (req, res) => {
  const users = await userServices.getUsers();
  res.status(200).json(users);
});

const getUserById = catchAsync(async (req, res) => {
  const user = await userServices.getUserById(req.params.id);
  if(!user){
    throw new ApiError(404, "User not found");
  }
  res.status(200).json(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userServices.updateUser(req.params.id, req.body);
  if(!user){
    throw new ApiError(404, "User not found");
  }
  res.status(200).json(user);
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await userServices.deleteUser(req.params.id);
  if(!user){
    throw new ApiError(404, "User not found");
  }
  res.status(200).json(user);
});

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
