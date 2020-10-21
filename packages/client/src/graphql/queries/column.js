import { gql } from "@apollo/client";

const columnQuery = gql`
    query($id: ID!) {
        column(id: $id) {
            title
            position
            dashboard
        }
    }
`;


export { columnQuery };
