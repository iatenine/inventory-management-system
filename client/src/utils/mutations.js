import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser ($_id: ID!){
  deleteUser(_id: $_id){
    _id
  }
}
`;

export const CREATE_INVENTORY = gql`
mutation createInventory($input: newInventory!){
  createInventory(input: $input){
    _id
    name
  }
}
`;

export const UPDATE_INVENTORY = gql`
mutation updateInventory($_id: ID!, $input: newInventory!){
  updateInventory(_id: $_id, input: $input){
    _id 
  	name
  }
}
`;

export const DELETE_INVENTORY = gql`
mutation deleteInventory($_id: ID!){
  deleteInventory(_id: $_id){
    _id
  }
}`;

export const CREATE_ITEM = gql`
mutation createItem($inventoryId: ID!, $input: newItem! ){
  createItem(inventoryId: $inventoryId, input: $input){
    _id
    name
    quantity
  }
}
`;

export const UPDATE_ITEM = gql`
mutation updateItem($_id: ID!, $input: updateItem!){
  updateItem(_id: $_id, input: $input){
    _id
    name
    quantity
  }
}
`;

export const DELETE_ITEM = gql`
mutation deleteItem($_id: ID!){
  deleteItem(_id: $_id)
}
`;