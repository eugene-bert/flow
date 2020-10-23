const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    column(id: ID!): Column @isAuthenticated
  }

  extend type Mutation {
    createColumn(
      title: String!
      position: Int
      dashboard: String
      issues: [String]
    ): Column

    deleteColumn(
      id: ID!
    ): Column

    updateColumn(
      id: ID!
      issues: [String]
    ): Column
  }

  type Column {
    id: ID!
    title: String!
    position: Int
    issues: [String]
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
