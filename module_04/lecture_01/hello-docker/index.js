const express = require("express");

const PORT = 5000;
const mongoose = require("mongoose");
const app = express();
const User = require("./model/user.model");

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/hello", (req, res) => {
  res.send("Hello from /hello endpoint");
});

app.post("/user", async (req, res) => {
  const body = req.body;
  const user = new User(body);
  const response = await user.save();
  res.send(response);
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
