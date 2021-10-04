const { Schema, model } = require("mongoose");

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {},
  items: {},
});

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
