const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    team(id: ID!): Team @isAuthenticated
  }

  extend type Mutation {
    createTeam(
      title: String!
      users: [String]
      issues: [String]
    ): Dashboard
  }

  type Team {
    id: ID!
    title: String!
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
