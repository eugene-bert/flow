const Issue = require("../../../models/issue");
const Column = require("../../../models/column");
const Dashboard = require("../../../models/dashboard");

const createIssueInColumn = async (
  _,
  { dashboard, column, title, assignee, description, labels },
  { user }
) => {
  const userId = user._id.toString();

  const newIssue = new Issue({
    title,
    column,
    assignee,
    description,
    dashboard,
    labels,
    createdById: userId,
  });
  
  await Column.findByIdAndUpdate(
    { _id: column },
    { $push: { issues: newIssue._id } },
    { new: true }
  );
  await newIssue.populate("createdById").execPopulate();

  return newIssue.save();
};

module.exports = createIssueInColumn;
