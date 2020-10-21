const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    dashboard(id: ID!): Dashboard @isAuthenticated
    createdByMeDashboards: [Dashboard] @isAuthenticated
  }

  extend type Mutation {
    createDashboard(
      title: String!
      users: [String]
      columns: [String]
      issues: [String]
    ): Dashboard

    updateDashboard(
      id: ID!
      title: String
      users: [String]
      columns: [String]
      issues: [String]
    ): Dashboard
  }

  type Dashboard {
    id: ID!
    title: String!
    columns: [String]
    users: [String]
    issues: [String]
    createdById: User!
    created: DateTime!
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
