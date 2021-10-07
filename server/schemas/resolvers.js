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

  // Mutation: {
  //   // createMatchup: async (parent, args) => {
  //   //   const matchup = await Matchup.create(args);
  //   //   return matchup;
  //   // },
  //   // createVote: async (parent, { _id, techNum }) => {
  //   //   const vote = await Matchup.findOneAndUpdate(
  //   //     { _id },
  //   //     { $inc: { [`tech${techNum}_votes`]: 1 } },
  //   //     { new: true }
  //   //   );
  //   //   return vote;
  //   // },
  // },

};
module.exports = resolvers;
