const Dashboard = require('../../../models/dashboard')
const User = require('../../../models/user')

const createDashboard = async (_, {
  title, users, columns, issues
}, { user }) => {
  const userId = user._id.toString()

  const newDashboard = new Dashboard({
    title,
    users: [userId],
    columns,
    issues,
    createdById: userId,
  });

  await User.findOneAndUpdate(
    { _id: userId },
    { $push: { dashboards: newDashboard.id } },
    { new: true }
  );

  await newDashboard
    .populate('createdById')
    .execPopulate()

  return newDashboard.save()
}

module.exports = createDashboard
