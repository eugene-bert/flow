const Dashboard = require('../../../models/dashboard')
const User = require('../../../models/user')

const deleteDashboard = async (_, args) => {
  const { id } = args;
  const dashboard = await Dashboard.findById(id);

  dashboard.users.map(async user => {
    await User.findByIdAndUpdate(
      { _id: user },
      { $pull: { dashboards: id } }
    );
  })


  return Dashboard.findByIdAndDelete(id);
}

module.exports = deleteDashboard
