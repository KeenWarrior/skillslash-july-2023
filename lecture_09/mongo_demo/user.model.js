const {Schema, model} = require("mongoose");

const UserSchema = Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

const User = model("User", UserSchema);

module.exports = User;
