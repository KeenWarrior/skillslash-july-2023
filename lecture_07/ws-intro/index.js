const socketIO = require("socket.io");
const express = require("express");
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./services.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

const app = express();

const server = app.listen(5000, () => {
  console.log("server is running on port 5000");
});

const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error("invalid token"));
  } else {
    const user = await firebaseAdmin.auth().verifyIdToken(token);
    if (!user) {
      return next(new Error("invalid token"));
    } else {
      console.log(user);
      socket.user = user;
      next();
    }
  }
});

io.on("connection", (socket) => {
  console.log("connected to client");

  socket.on("disconnect", () => {
    console.log("disconnected from client");
  });

  socket.on("message", (payload) => {
    console.log(payload, socket.id, new Date());
    io.emit("message", {
      ...payload,
      uid: socket.user.uid,
      name: socket.user.name,
      picture: socket.user.picture,
      timestamp: new Date(),
    });
  });
});
