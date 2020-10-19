const issue = require('./issue')
const issues = require('./issues')
const createIssue = require('./create-issue')
const createdByMeIssues = require('./createdByMeIssues');
const createdByIssues = require('./createdByIssues');

const resolvers = {
  Query: {
    issue,
    issues,
    createdByIssues,
    createdByMeIssues
  },
  Mutation: {
    createIssue
  }
}

module.exports = resolvers
