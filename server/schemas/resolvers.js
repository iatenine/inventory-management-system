const { User, Inventory, Item } = require('../models');
const {AuthenticationError} = require('apollo-server-express')
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(args._id)
  
        const users = await User.findOne({ _id: args._id }).populate({path: "inventories", populate: {path: "items"}})

        if(!users){
          throw new AuthenticationError("Cannot find a user with this id!")
        }

        return users
        },
    
    getUsers: async (parent, args, context) => {
      const users = await User.find({}).populate({path: "inventories", populate: {path: "items"}})

      if(!users) {
        throw new AuthenticationError(User)
      }

      return users
    }, 
    inventory: async (parent, args, context) => {
      const inventories = await Inventory.findOne({_id: args._id}).populate("items")
      if(!inventories){
        throw new AuthenticationError(inventories)
      }

      return inventories
    },
},

Mutation: {
  login: async (parent, {email, username, password}) => {
    const profile = await User.findOne({
      $or: [{username}, {email}]
    })

    if(!profile){
      throw new AutenticationError("No profile with those credentials is found!")
    }

    const correctPw = await User.isCorrectPassword(password)

    if(!correctPw){
      throw new AuthenticationError("Incorrect password!")
    }

    const token = signToken(profile)
    return {token, profile}
  },
  createUser: async (parent, {username, email, password}) => {
    const newUser = await User.create({username, email, password})

    if(!newUser){
      throw new AuthenticationError("Something went wrong!")
    }

    const token = signToken(newUser)
    return {token, newUser}

  }



},

};
module.exports = resolvers;
