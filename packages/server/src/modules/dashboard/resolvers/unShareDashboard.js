const Dashboard = require('../../../models/dashboard')
const User = require('../../../models/user')

const unShareDashboard = async (_, args) => {
  const { email, dashboardId } = args;
  const user = await User.findOneAndUpdate(
    { email },
    { $pull: { dashboards: dashboardId } }
  );

  const dashboard = await Dashboard.findByIdAndUpdate(
    { _id: dashboardId },
    { $pull: { users: user.id } }
  );;

  return dashboard
}

module.exports = unShareDashboard
