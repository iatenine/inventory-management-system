const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {},
  quantity: {},
  category: {},
  image: {},
});

const Item = model("Item", itemSchema);
module.exports = Item;
