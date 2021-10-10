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
// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       quantity
//       image
//       category {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const QUERY_ALL_PRODUCTS = gql`
//   {
//     products {
//       _id
//       name
//       quantity
//       category {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

