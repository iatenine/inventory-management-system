import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query User($_id: ID!) {
  user(_id: $_id){
     username
      inventories {
        _id
        name
        items {
          _id
          name
          quantity
          image
          category
        }
      }
  }
}
`;

export const QUERY_SINGLE_INVENTORY = gql`
query inventory($_id: ID!){
  inventory(_id: $_id){
  	name
    items {
      _id
      name
      quantity
      image
      category
    }
  }
}
`


// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

