const express = require("express");
const cors = require("cors");
const User = require("./user.model");
const mongoose = require("mongoose");

const { init } = require("./mongoose");

const PORT = 5000;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
});

app.post("/users", async (req, res) => {
  const user = req.body;
  const createdUser = await User.create(user);
  res.send(createdUser);
});

app.patch("/users/:id", async (req, res) => {
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
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    res.status(404).send("User not found");
    return;
  } else {
    res.send(user);
  }
});

init().then(() => {
  if (mongoose.connection.readyState === 0) {
    console.log("Not connected to database");
    return;
  } else if (mongoose.connection.readyState === 1) {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log("Server started on port " + PORT);
    });
  }
});
