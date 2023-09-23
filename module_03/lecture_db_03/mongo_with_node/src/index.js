import app from "./app";
import { config } from "./config/config";
import { connect } from "./mongoose";

const PORT = config.port;

connect().then((connection) => {
  if (connection.readyState === 1) {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on: http://localhost:${PORT}`);
    });
  }
}).catch((err) => {
    console.log(err);
});
