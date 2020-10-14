const { gql } = require('apollo-server-express')

const typeDefs = gql`
  extend type Query {
    issue(id: ID!): Issue @isAuthenticated
    issues: [Issue] @isAuthenticated
  }

  extend type Mutation {
    createIssue(
      title: String!
      description: String!
      labels: String,
      assignee: [String]
    ): Issue
  }

  type Issue {
    id: ID!
    title: String!
    assignee: [User]
    description: String!
    labels: String
    createdBy: User!
    created: DateTime!
  }
`

const resolvers = require('./resolvers')

module.exports = {
  typeDefs: [
    typeDefs
  ],
  resolvers
}
