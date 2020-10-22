const createDashboard = require("./createDashboard");
const dashboard = require("./dashboard");
const createdByMeDashboards = require('./createdByMeDashboards');
const updateDashboard = require('./updateDashboard');
const deleteDashboard = require('./deleteDashboard');

const resolvers = {
  Query: {
    dashboard,
    createdByMeDashboards
  },
  Mutation: {
    createDashboard,
    updateDashboard,
    deleteDashboard
  },
};

module.exports = resolvers;
