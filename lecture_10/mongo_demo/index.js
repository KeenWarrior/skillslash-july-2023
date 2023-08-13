const mongoose = require("mongoose");
const { init } = require("./mongoose");
const app = require("./app");

const PORT = 5000;

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
