const { ApolloError } = require("apollo-server-express");
const Team = require("../../../models/team");

const team = async (_, args) => {
  const { id } = args;
  const team = await Team.findById(id).populate("createdById");

  if (!team) {
    throw new ApolloError("Not found");
  }

  return team;
};

module.exports = team;
