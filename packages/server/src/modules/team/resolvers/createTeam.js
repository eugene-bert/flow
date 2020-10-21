const Team = require("../../../models/team");

const createTeam = async (_, { title, users, issues }, { user }) => {
  const userId = user._id.toString();

  const newTeam = new Team({
    title,
    users,
    issues,
    createdById: userId,
  });

  await newTeam.populate("createdById").execPopulate();

  return newTeam.save();
};

module.exports = createTeam;
