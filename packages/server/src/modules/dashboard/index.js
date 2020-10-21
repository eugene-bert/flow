const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    dashboard(id: ID!): Dashboard @isAuthenticated
  }

  extend type Mutation {
    createDashboard(
      title: String!
      team: String
      columns: [String]
      issues: [String]
    ): Dashboard
  }

  type Dashboard {
    id: ID!
    title: String!
    team: String
    columns: [String]
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
