const express = require("express");
const cors = require("cors");

const sequelize = require("./sequelize");
const initSocketIO = require("./sock");
const Chat = require("./models/chat.model");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  const chats = await Chat.findAll();
  console.log(chats);
  res.send(chats);
});

sequelize.sync({ force: true }).then(() => {
  const server = app.listen(5000, () => {
    console.log("server is running on port 5000");
  });
  initSocketIO(server);
});
