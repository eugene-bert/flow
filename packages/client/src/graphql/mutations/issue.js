import { gql } from "@apollo/client";

const createIssue = gql`
    mutation($title: String!, $description: String!, $labels: [String], $column: String,) {
        createIssue(title: $title, description: $description, column: $column, labels: $labels) {
            title,
            column,
            description,
            labels
        }
    }
`;

export { createIssue };
