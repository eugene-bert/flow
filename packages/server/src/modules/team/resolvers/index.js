const createTeam = require("./createTeam");
const team = require("./team");

const resolvers = {
  Query: {
    team,
  },
  Mutation: {
    createTeam,
  },
};

module.exports = resolvers;
