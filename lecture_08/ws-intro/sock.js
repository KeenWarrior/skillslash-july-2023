const Chat = require("./models/chat.model");
const socketIO = require("socket.io");
const firebaseAdmin = require("./utils/firebaseAdmin");
const User = require("./models/user.model");

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
      await User.findOrCreate({
        where: {
          uid: user.uid,
        },
        defaults: {
          name: user.name,
          picture: user.picture,
        },
      });
      
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
    
      const response = {
        ...payload,
        from: socket.user.uid,
        timestamp: new Date(),
      };

      console.log(response);

      io.to(response.from).emit("message", response);
      io.to(response.to).emit("message", response);
    });
  });
}

module.exports = initSocketIO;
