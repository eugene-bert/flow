import { gql } from "@apollo/client";

const meQuery = gql`
    query {
        me{
            email,
            firstName,
            lastName
        }
    }
`;

export { meQuery };
