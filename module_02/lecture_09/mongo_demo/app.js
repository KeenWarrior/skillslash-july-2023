const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);

module.exports = app;