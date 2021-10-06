const { Schema, model } = require("mongoose");
const Item = require("./Item");

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Inventory = model("Inventory", inventorySchema);

module.exports = Inventory;
