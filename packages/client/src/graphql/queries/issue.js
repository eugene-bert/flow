import { gql } from "@apollo/client";

const issueQuery = gql`
    query {
        issues{
            id
            title
        }
    }
`;

export { issueQuery };
