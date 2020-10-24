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

const createIssueInColumn = gql`
    mutation($column: String!, $title: String!, $description: String!, $labels: [String] ,$assignee: String, $dashboard: String!) {
        createIssueInColumn(column: $column, title: $title, description: $description, labels: $labels, assignee: $assignee, dashboard: $dashboard) {
            title,
            description,
            labels
            labels
            dashboard
            assignee {
                firstName,
                lastName
            }
        }
    }
`;

const deleteIssue = gql`
    mutation($columnId: String!, $issueId: String!) {
        deleteIssue(columnId: $columnId,  issueId: $issueId) {
            title,
            column,
            description,
            dashboard
            labels
        }
    }
`;

export { createIssue, updateIssue, createIssueInColumn, deleteIssue };
