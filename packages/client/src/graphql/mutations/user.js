import { gql } from "@apollo/client";

const signUpMutation = gql`
  mutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      email
    }
  }
`;

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      tokenExpiration
    }
  }
`;

export { signUpMutation, loginMutation };
