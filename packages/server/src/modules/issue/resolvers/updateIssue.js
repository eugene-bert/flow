const { ApolloError } = require("apollo-server-express");
const Issue = require("../../../models/issue");

const updateIssue = async (_, args) => {
  const { id, ...arguments } = args;
  try {
    return Issue.findByIdAndUpdate({ _id: id }, arguments, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = updateIssue;
