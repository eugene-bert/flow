const { ApolloError } = require("apollo-server-express");
const Dashboard = require("../../../models/dashboard");

const dashboard = async (_, args) => {
  const { id } = args;
  const dashboard = await Dashboard.findById(id).populate("createdById");

  if (!dashboard) {
    throw new ApolloError("Not found");
  }

  return dashboard;
};

module.exports = dashboard;
