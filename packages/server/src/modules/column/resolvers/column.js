const { ApolloError } = require("apollo-server-express");
const Column = require("../../../models/column");

const column = async (_, args) => {
  const { id } = args;
  const column = await Column.findById(id).populate("createdById");

  if (!column) {
    throw new ApolloError("Not found");
  }

  return column;
};

module.exports = column;
