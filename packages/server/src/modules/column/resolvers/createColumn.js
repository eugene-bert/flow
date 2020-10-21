const Column = require("../../../models/column");

const createColumn = async (
  _,
  { title, index, dashboard, issues },
  { user }
) => {
  const userId = user._id.toString();

  const newColumn = new Column({
    title,
    index,
    dashboard,
    issues,
    createdById: userId,
  });

  await newColumn.populate("createdById").execPopulate();

  return newColumn.save();
};

module.exports = createColumn;
