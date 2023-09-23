const Chat = require("./models/chat.model");
const socketIO = require("socket.io");
const firebaseAdmin = require("./utils/firebaseAdmin");

const initSocketIO = (server) => {
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
    
    socket.join(socket.user.uid);

    socket.on("disconnect", () => {
      console.log("disconnected from client");
    });

    socket.on("message", (payload) => {
      console.log(payload, socket.id, new Date());

      const response = {
        ...payload,
        uid: socket.user.uid,
        name: socket.user.name,
        picture: socket.user.picture,
        timestamp: new Date(),
      };

      io.emit("message", response);
      Chat.create(response);
    });
  });
}

module.exports = initSocketIO;
