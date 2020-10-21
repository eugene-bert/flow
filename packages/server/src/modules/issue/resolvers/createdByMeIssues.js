const { ApolloError } = require("apollo-server-express");
const Issue = require("../../../models/issue");

const createdByMeIssues = async (_, {}, { user }) => {
  const userId = user._id.toString();
  const issue = await Issue.find({ createdById: userId });

  if (!issue) {
    throw new ApolloError("Not found");
  }

  return issue;
};

module.exports = createdByMeIssues;
