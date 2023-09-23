const express = require("express");
const cors = require("cors");
var admin = require("firebase-admin");

var serviceAccount = require("./services.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

app.use(express.json());
app.use(cors());

const firebaseAuth = (req, res, next) => {
  console.log("Time:", Date.now());
  console.log(req.headers.authorization);
  const [type, token] = req.headers.authorization.split(" ");
  if (type === "Bearer") {
    admin
      .auth()
      .verifyIdToken(token)
      .then((user) => {
        console.log(user);
        req.user = user;
        next();
      })
      .catch((err) => {
        res.status(403).send("Unauthorized");
      });
  } else {
    res.status(403).send("Unauthorized");
  }
};

app.get("/", firebaseAuth, (req, res) => {
  res.send("Hello " + JSON.stringify(req.user));
});

app.get("/public", (req, res) => {
    res.send("Hello " + JSON.stringify(req.user));
  });
  

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
