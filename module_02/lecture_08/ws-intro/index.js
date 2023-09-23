const express = require("express");
const cors = require("cors");

const sequelize = require("./sequelize");
const initSocketIO = require("./sock");
const Chat = require("./models/chat.model");
const User = require("./models/user.model");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  const chats = await Chat.findAll();
  console.log(chats);
  res.send(chats);
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

sequelize.sync({ force: true }).then(() => {
  const server = app.listen(5000, () => {
    console.log("server is running on port 5000");
  });
  initSocketIO(server);
});
