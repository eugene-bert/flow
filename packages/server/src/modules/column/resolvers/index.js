const createColumn = require("./createColumn");
const column = require("./column");

const resolvers = {
  Query: {
    column,
  },
  Mutation: {
    createColumn,
  },
};

module.exports = resolvers;
