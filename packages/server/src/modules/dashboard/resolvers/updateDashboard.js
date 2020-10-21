const Dashboard = require("../../../models/dashboard");

const updateDashboard = async (_, args) => {
  const { id, ...arguments } = args;
  try {
    return Dashboard.findByIdAndUpdate({ _id: id }, arguments, { new: true });
  } catch (error) {
    throw error;
  }
};

module.exports = updateDashboard;
