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

const updateMeMutation = gql`
    mutation($email: String, $firstName: String, $lastName: String) {
        updateMe(email: $email, firstName: $firstName, lastName: $lastName) {
            email,
            firstName,
            lastName
        }
    }
`;

export { signUpMutation, loginMutation, updateMeMutation };
