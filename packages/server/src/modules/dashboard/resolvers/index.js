const createDashboard = require("./createDashboard");
const dashboard = require("./dashboard");
const createdByMeDashboards = require('./createdByMeDashboards');
const updateDashboard = require('./updateDashboard');
const deleteDashboard = require('./deleteDashboard');
const shareDashboard = require('./shareDashboard');
const unShareDashboard = require('./unShareDashboard');

const resolvers = {
  Query: {
    dashboard,
    createdByMeDashboards
  },
  Mutation: {
    createDashboard,
    updateDashboard,
    deleteDashboard,
    shareDashboard,
    unShareDashboard
  },
};

module.exports = resolvers;
