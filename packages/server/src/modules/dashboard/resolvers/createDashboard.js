const Dashboard = require('../../../models/dashboard')

const createDashboard = async (_, {
  title, users, columns, issues
}, { user }) => {
  const userId = user._id.toString()

  const newDashboard = new Dashboard({
    title,
    users,
    columns,
    issues,
    createdById: userId,
  });

  await newDashboard
    .populate('createdById')
    .execPopulate()

  return newDashboard.save()
}

module.exports = createDashboard
