import { gql } from "@apollo/client";

const createIssue = gql`
    mutation($title: String!, $description: String!, $labels: [String], $column: String,$dashboard: String) {
        createIssue(title: $title, description: $description, labels: $labels, column: $column, dashboard: $dashboard) {
            title,
            column,
            description,
            dashboard
            labels
        }
    }
`;

const updateIssue = gql`
    mutation($id: ID!, $title: String, $description: String, $labels: [String], $column: String,$dashboard: String) {
        updateIssue(id: $id, title: $title, description: $description, labels: $labels, column: $column, dashboard: $dashboard) {
            title,
            column,
            description,
            dashboard
            labels
        }
    }
`;

export { createIssue, updateIssue };
