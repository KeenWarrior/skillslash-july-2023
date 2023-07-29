const express = require("express");
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json());


//auth
app.use(function (req, res, next) {
    if(req.headers.authorization){
        const splits = req.headers.authorization.split(" ");
        if(splits[0]== "Basic" && splits.length == 2){
            const userpass = atob(splits[1]).split(":");
            const user = userpass[0];
            const pass = userpass[1];
            const salted = bcrypt.hashSync(pass, 10);
            console.log (user, pass, salted);
            next();
        } else {
            res.status(401).send("Not authorized");
        }
    } else {
        res.status(401).send("Not authorized");
    }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
