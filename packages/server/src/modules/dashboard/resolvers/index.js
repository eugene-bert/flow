const createDashboard = require("./createDashboard");
const dashboard = require("./dashboard");

const resolvers = {
  Query: {
    dashboard,
  },
  Mutation: {
    createDashboard,
  },
};

module.exports = resolvers;
