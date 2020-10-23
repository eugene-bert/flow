const createColumn = require("./createColumn");
const column = require("./column");
const deleteColumn = require("./deleteColumn");
const updateColumn = require("./updateColumn");

const resolvers = {
  Query: {
    column,
  },
  Mutation: {
    updateColumn,
    createColumn,
    deleteColumn,
  },
};

module.exports = resolvers;
