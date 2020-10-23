import { gql } from "@apollo/client";

const createColumn = gql`
    mutation($title: String!, $dashboard: String!) {
        createColumn(title: $title, dashboard: $dashboard) {
            id,
            title,
            dashboard
        }
    }
`;

const deleteColumn = gql`
    mutation($id: ID!){
        deleteColumn(id: $id) {
            id
            title
        }
    }
`;

const updateColumn = gql`
    mutation($id: ID!, $issues: [String]){
        updateColumn(id: $id, issues: $issues) {
            id
            issues
        }
    }
`;

export { createColumn, deleteColumn, updateColumn };
