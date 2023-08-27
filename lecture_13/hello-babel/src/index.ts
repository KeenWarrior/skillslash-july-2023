import express from "express";
import { Express } from "express-serve-static-core";

const app : Express = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
