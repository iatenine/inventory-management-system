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
    catergory: [String!]
    image: String!
  }

  type Query {
    me: User
  }

`;

module.exports = typeDefs;
