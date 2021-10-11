const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Auth {
    token: String!
    user: User
    inventory: Inventory
    item: Item
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    inventories: [Inventory]
  }

  type Inventory {
    _id: ID!
    name: String!
    items: [Item]
  }

  type Item {
    _id: ID!
    name: String!
    quantity: Int!
    category: [String]
    image: String
  }

  input newInventory {
    name: String!
  }

  input newItem {
    name: String!
    quantity: Int
    category: [String]
    image: String
  }

  input updateItem {
    inventoryId: ID
    name: String
    quantity: Int
    category: [String]
    image: String
  }

  type Query {
    user(_id: ID!): User!
    getUsers: [User]
    inventory(_id: ID!): Inventory!
    getItems: [Item]
    getItem(_id: ID!): Item!
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User

    createInventory(input: newInventory!): Inventory
    updateInventory(_id: ID!, input: newInventory!): Inventory
    deleteInventory(_id: ID!): Inventory

    createItem(inventoryId: ID!, input: newItem!): Item
    updateItem(_id: ID!, input: updateItem!): Item
    deleteItem(_id: ID!): Int
  }
`;

module.exports = typeDefs;
