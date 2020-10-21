const Column = require("../../../models/column");
const Dashboard = require("../../../models/dashboard");

const createColumn = async (
  _,
  { id, title, position, dashboard, issues },
  { user }
) => {
  const userId = user._id.toString();

  const newColumn = new Column({
    title,
    position,
    dashboard,
    issues,
    createdById: userId,
  });

  const newDashboard = Dashboard.findByIdAndUpdate(
    { _id: dashboard },
    {$push: {columns: newColumn._id}},
    { new: true }
    )

  await newColumn.populate("createdById").execPopulate()


  return newColumn.save() && newDashboard;
};

module.exports = createColumn;
