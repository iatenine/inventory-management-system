const { Schema, model } = require("mongoose");

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {
    type: String,
    required: true,
  },
  items: [itemSchema],
});

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
