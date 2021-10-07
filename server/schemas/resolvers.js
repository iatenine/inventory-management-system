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
      throw new AuthenticationError("No profile with those credentials is found!")
    }

    const correctPw = await profile.isCorrectPassword(password)

    if(!correctPw){
      throw new AuthenticationError("Incorrect password!")
    }
    
    const token = signToken(profile)
    return {token, user: profile}
  },
  createUser: async (parent, {username, email, password}) => {
    const newUser = await User.create({username, email, password})

    if(!newUser){
      throw new AuthenticationError("Something went wrong!")
    }

    const token = signToken(newUser)
    return {token, user: newUser}

  },

  deleteUser: async (parent, args, context) => {
    console.log(args + " " + args._id)
    const removeUser = await User.remove({
      _id: args._id
    }, {new: true})

    if(!removeUser) {
      throw new AuthenticationError("Couldn't find user with those credentials!")
    }
    return {User: removeUser}


  },
  createInventory: async(parent, {input}) => {
    const createInventory = await Inventory.create(input)

    if(!createInventory){
      throw new AuthenticationError("Something went wrong!")
    }

    return createInventory
  },
  updateInventory: async (parent, {_id, input }) => {
    const updateInv = await Inventory.findByIdAndUpdate(_id, input, {new: true});

    if(!updateInv){
      throw new AuthenticationError("Something went wrong and we couldn't update your Inventory!")
    }

    return updateInv;
  },
  deleteInventory: async (parent, {_id}) => {
    const removeInv = await Inventory.remove({_id}, {new: true})

    if(!removeInv){
      throw new AuthenticationError("Something went wrong and we couldn't remove your Inventory!")
    }

    return removeInv
  },
  createItem: async (parent, {input}) => {
    const createItem = await Item.create(input)
    const addItto = await Inventory.findByIdAndUpdate( input.inventoryId, { $push: {items: (createItem._id)}}, {new: true})
    
    if(!addItto || !createItem){
      throw new AuthenticationError("Something went wrong!")
    }

    return addItto
  },
  updateItem: async (parent, {_id, input }) => {
    const updateItem = await Item.findByIdAndUpdate(_id, input, {new: true});

    if(!updateItem){
      throw new AuthenticationError("Something went wrong and we couldn't update your Item!")
    }

    return updateItem;
  },
  deleteItem: async (parent, {_id}) => {
    const removeItem = await Item.remove({_id}, {new: true})

      console.log(removeItem)
    if(!removeItem){
      throw new AuthenticationError("Something went wrong and we couldn't remove your Inventory!")
    }

    return removeItem.deletedCount
  },
  
},

};
module.exports = resolvers;
