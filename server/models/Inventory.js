const { Schema, model } = require("mongoose");
const itemSchema = require('./Item')

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  items: [itemSchema],
});

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
