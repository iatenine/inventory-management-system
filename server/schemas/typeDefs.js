const { gql } = require("apollo-server-express");


const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
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
    quantity: String!
    category: [String!]
    image: String!
  }

  type Query {
    user(_id: ID!): User!
    getUsers: [User]
    inventory(_id: ID!): Inventory!
  }

  type Mutation {
    login(email: String!, password: String!) : Auth
    createUser(username: String!, email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
