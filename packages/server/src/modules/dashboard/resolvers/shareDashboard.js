const Dashboard = require('../../../models/dashboard')
const User = require('../../../models/user')

const shareDashboard = async (_, args) => {
  const { email, dashboardId } = args;
  const user = await User.findOneAndUpdate(
    { email },
    { $push: { dashboards: dashboardId } }
  );

  const dashboard = await Dashboard.findByIdAndUpdate(
    { _id: dashboardId },
    { $push: { users: user.id } }
  );;

  return dashboard
}

module.exports = shareDashboard
