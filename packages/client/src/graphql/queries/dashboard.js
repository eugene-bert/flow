import { gql } from "@apollo/client";

const dashboardsQuery = gql`
  query {
    createdByMeDashboards {
      id
      title
      columns
      issues
      users
    }
  }
`;
const dashboardQuery = gql`
  query($id: ID!) {
    dashboard(id: $id) {
      title
      users
      issues
      columns
    }
  }
`;

export { dashboardsQuery, dashboardQuery };
