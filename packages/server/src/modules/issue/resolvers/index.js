const issue = require('./issue')
const issues = require('./issues')
const createIssue = require('./createIssue')
const createdByMeIssues = require('./createdByMeIssues');
const createdByIssues = require('./createdByIssues');
const updateIssue = require('./updateIssue');
const createIssueInColumn = require('./createIssueInColumn');
const deleteIssue = require('./deleteIssue');

const resolvers = {
  Query: {
    issue,
    issues,
    createdByIssues,
    createdByMeIssues,
  },
  Mutation: {
    createIssue,
    updateIssue,
    deleteIssue,
    createIssueInColumn
  },
};

module.exports = resolvers
