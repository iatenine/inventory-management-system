const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
});

const Item = model("Item", itemSchema);
module.exports = Item;
