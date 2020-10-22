import { gql } from "@apollo/client";

const createDashboard = gql`
    mutation($title: String!) {
        createDashboard(title: $title) {
            title
        }
    }
`;

const updateDashboard = gql`
    mutation($id: ID!, $title: String, $users: [String], $columns: [String], $issues: [String] ) {
        updateDashboard(id: $id, title: $title, users: $users, columns: $columns, issues: $issues) {
            id,
            title,
            users,
            columns,
            issues
        }
    }
`;

const deleteDashboard = gql`
    mutation($id: ID!){
        deleteDashboard(id: $id) {
            id
            title
        }
    }
`;

export { createDashboard, updateDashboard, deleteDashboard };
