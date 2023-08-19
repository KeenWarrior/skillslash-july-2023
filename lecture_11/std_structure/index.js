const config = require("./config/config");
const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(config.mongoose.url).then(() => {
  console.log("Connected to MongoDB");
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
});
