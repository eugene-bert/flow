const { ApolloError } = require("apollo-server-express");
const Issue = require("../../../models/issue");

const createdByIssues = async (_, { id }) => {
  const issue = await Issue.find({ createdById: id });

  if (!issue) {
    throw new ApolloError("Not found");
  }

  return issue;
};

module.exports = createdByIssues;
