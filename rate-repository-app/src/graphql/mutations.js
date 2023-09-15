import { gql } from '@apollo/client';

// export const RETRIEVE_TOKEN = gql`
//   mutation {
//     authenticate(credentials: { username: "kalle", password: "password" }) {
//       accessToken
//     }
//   }
// `;

export const RETRIEVE_TOKEN = gql`
  mutation RetrieveToken($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

// export const ADD_USER = gql`
//   mutation {
//     createUser(user: { username: "myusername", password: "mypassword" }) {
//       id
//       username
//     }
//   }  
// `;
export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`;