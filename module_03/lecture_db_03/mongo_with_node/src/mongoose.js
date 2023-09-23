import mongoose from "mongoose";

import { config } from "./config/config";

const connect = async () => {
  await mongoose.connect(config.mongoose.url);
  return mongoose.connection;
};

export { connect };
