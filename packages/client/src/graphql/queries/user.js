import { gql } from "@apollo/client";

const meQuery = gql`
    query {
        me{
            email,
            firstName,
            lastName,
            dashboards
        }
    }
`;

const searchUserById = gql`
    query($id: String!) {
        searchUserById(id: $id){
            email,
            firstName,
            lastName,
            dashboards
        }
    }
`;

export { meQuery, searchUserById };
