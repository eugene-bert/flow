const { ApolloError } = require("apollo-server-express");
const Column = require("../../../models/column");

const updateColumn = async (_, args) => {
  const { id, ...arguments } = args;
  try {
    return Column.findByIdAndUpdate({ _id: id }, arguments, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = updateColumn;
