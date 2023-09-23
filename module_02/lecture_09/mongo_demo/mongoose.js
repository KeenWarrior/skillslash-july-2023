const mongoose = require("mongoose");

const CONN_URL = "mongodb://localhost:27017/skillslash";

async function init() {
  await mongoose.connect(CONN_URL);
}

module.exports = { init };
