const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const passport = require("passport");
const jwtStrategy = require("./config/passport");
const ApiError = require("./utils/ApiError");

const { Error } =require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

passport.use("jwt", jwtStrategy);

app.use("/api", routes);

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else if (err instanceof Error.CastError) {
    res.status(400).json({
      message: "Invalid id",
    });
  } else {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = app;
