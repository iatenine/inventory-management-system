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
  category: [{
    type: String,
    required: true
  }],
  image: {
    type: String
  },
});


module.exports = itemSchema;
