const issue = require('./issue')
const issues = require('./issues')
const createIssue = require('./create-issue')

const resolvers = {
  Query: {
    issue,
    issues
  },
  Mutation: {
    createIssue
  }
}

module.exports = resolvers
