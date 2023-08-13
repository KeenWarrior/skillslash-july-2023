const express = require("express");
const User = require("./user.model");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).send(user);
});

module.exports = app;
