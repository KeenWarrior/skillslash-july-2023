const express = require("express");
const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const session = require("express-session");
const bcrypt = require("bcrypt");
const sequelize = require("./sequelize");
const User = require("./models/users.model");

const app = express();
app.use(express.json());

var sess = {
  secret: "skillslash",
  cookie: {},
};

app.use(session(sess));

const str = new BasicStrategy(function (username, password, done) {
  console.log("strategy", username, password);

  User.findOne({ where: { username: username } }).then((user) => {
    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        done(null, { username: username, name: user.name, id: user.id });
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  });
});

passport.use(str);

passport.serializeUser(function (user, done) {
  console.log("serialize", user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("deserialize", user);
  done(null, user);
});

app.use(passport.initialize());

app.get("/", passport.authenticate("basic"), (req, res) => {
  console.log("user", req.user);
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  const { username, password, name } = req.body;
  const salted = bcrypt.hashSync(password, 10);
  const user = {
    username: username,
    password: salted,
    name: name,
  };

  User.create(user).then((response) => {
    res.json(response);
  });
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
