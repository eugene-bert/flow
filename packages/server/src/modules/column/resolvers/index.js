const createColumn = require("./createColumn");
const column = require("./column");
const deleteColumn = require('./deleteColumn');

const resolvers = {
  Query: {
    column,
  },
  Mutation: {
    createColumn,
    deleteColumn
  },
};

module.exports = resolvers;
