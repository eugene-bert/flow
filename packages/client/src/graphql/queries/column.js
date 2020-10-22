import { gql } from "@apollo/client";

const columnQuery = gql`
    query($id: ID!) {
        column(id: $id) {
            id
            title
            position
            dashboard
            issues
        }
    }
`;


export { columnQuery };
