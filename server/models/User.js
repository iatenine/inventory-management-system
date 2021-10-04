const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {},
  email: {},
  password: {},
  inventories: {},
});

const User = model("User", userSchema);
module.exports = User;
