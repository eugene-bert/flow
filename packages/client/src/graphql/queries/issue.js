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

const oneIssueQuery = gql`
    query($id: ID!) {
        issue(id: $id){
            id
            title
            description
            column
            dashboard
            labels
        }
    }
`;

const createdByMeQuery = gql`
    query {
        createdByMeIssues{
            id
            title
            description
            column
            dashboard
            labels
        }
    }
`;

export { issueQuery, createdByMeQuery, oneIssueQuery };
