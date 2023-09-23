const app = require("./app");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/another").then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
