const { ApolloError } = require("apollo-server-express");
const Issue = require("../../../models/issue");

const issue = async (_, args) => {
  const { id } = args;
  const issue = await Issue.findById(id).populate("createdById");

  if (!issue) {
    throw new ApolloError("Not found");
  }

  return issue;
};

module.exports = issue;
