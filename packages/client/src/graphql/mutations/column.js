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

export { createColumn };
