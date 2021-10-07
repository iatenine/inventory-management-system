const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const inventorySchema = require("./Inventory");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    require: true,
  },
  inventories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Inventory",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.password && this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);

    next();
  }
});

userSchema.pre("insertMany", async function (next, docs) {
  try {
    const saltRounds = 10;
    for (let x = 0; x < docs.length; x++) {
      docs[x].password = await bcrypt.hash(docs[x].password, saltRounds);
    }
  } catch (error) {
    console.error(error);
  }

  next();
});

userSchema.methods.isCorrectPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;
