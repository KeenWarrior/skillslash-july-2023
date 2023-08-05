const socketIO = require("socket.io");
const express = require("express");

const app = express();

const server = app.listen(5000, () => {
  console.log("server is running on port 5000");
});

const io = socketIO(server, {
    cors : {
        origin : "*",
    }
});

io.on("connection", (socket) => {
  console.log("connected to client");

  socket.on("disconnect", () => {
    console.log("disconnected from client");
  });

  socket.on("message", (payload) => {
    console.log(payload, socket.id, new Date());
    io.emit("message", payload);
  });

});
