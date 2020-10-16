import { gql } from "@apollo/client";

const issueQuery = gql`
    query {
        issues{
            id
            title
            description
            column
            dashboard
            labels
        }
    }
`;

export { issueQuery };
