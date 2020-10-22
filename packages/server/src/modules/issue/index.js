const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    issue(id: ID!): Issue @isAuthenticated
    issues: [Issue] @isAuthenticated
    createdByIssues(id: ID!): [Issue] @isAuthenticated
    createdByMeIssues: [Issue] @isAuthenticated
  }

  extend type Mutation {
    createIssue(
      title: String!
      description: String!
      column: String
      dashboard: String
      labels: [String]
      assignee: String
    ): Issue

    updateIssue(
      id: ID!
      title: String
      description: String
      column: String
      dashboard: String
      labels: [String]
      assignee: String
    ): Issue

    createIssueInColumn(
      column: String!
      title: String!
      description: String
      dashboard: String
      labels: [String]
      assignee: String
    ): Issue
  }

  type Issue {
    id: ID!
    title: String!
    assignee: User
    description: String!
    labels: [String]
    column: String!
    dashboard: String
    createdById: User!
    created: DateTime!
  }
`;

const resolvers = require("./resolvers");

module.exports = {
  typeDefs: [typeDefs],
  resolvers,
};
