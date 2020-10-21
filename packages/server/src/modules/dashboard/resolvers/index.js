const createDashboard = require("./createDashboard");
const dashboard = require("./dashboard");
const createdByMeDashboards = require('./createdByMeDashboards');
const updateDashboard = require('./updateDashboard');

const resolvers = {
  Query: {
    dashboard,
    createdByMeDashboards
  },
  Mutation: {
    createDashboard,
    updateDashboard
  },
};

module.exports = resolvers;
