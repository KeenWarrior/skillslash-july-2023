const socketIOClient = require("socket.io-client");

const socket = socketIOClient("http://localhost:3000");

socket.on("connect", () => {
    console.log("Connected to server");

    setInterval(() => {
        socket.emit("message", "Hello from client");
    }, 1000);

});