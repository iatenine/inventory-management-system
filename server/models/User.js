const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')

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
    match: [/.+@.+\..+/, 'Must use a valid email address']
  },
  password: {
    type: String,
    require: true
  },
  inventories: [{
    type: Schema.Types.ObjectId,
    ref: 'Inventory'
  }],

  
});

console.log("Hi i'm outside");
userSchema.pre('save', async function (next) {
  if(this.password || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

userSchema.pre('insertMany', async function (next) {
  console.log("Hi i'm inside")
  if(this.password || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const User = model("User", userSchema);
module.exports = User;
