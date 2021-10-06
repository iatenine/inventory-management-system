const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  category: [
    {
      type: String,
      required: true,
      default: 'General',
    },
  ],
  image: {
    type: String,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
