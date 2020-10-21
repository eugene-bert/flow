const { ApolloError } = require("apollo-server-express");
const Dashboard = require("../../../models/dashboard");

const createdByMeDashboards = async (_, {}, { user }) => {
  const userId = user._id.toString();
  const dashboards = await Dashboard.find({ createdById: userId });

  if (!dashboards) {
    throw new ApolloError("Not found");
  }

  return dashboards;
};

module.exports = createdByMeDashboards;
