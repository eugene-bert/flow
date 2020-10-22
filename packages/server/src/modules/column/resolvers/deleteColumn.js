const Column = require('../../../models/column')
const Dashboard = require('../../../models/dashboard')
const Issue = require('../../../models/issue')

const deleteColumn= async (_, args) => {
  const { id } = args;
  const column = await Column.findById(id);

  await Dashboard.findByIdAndUpdate(
    { _id: column.dashboard },
    { $pull: { columns: id } }
  );

  column.issues.map(async issue => {
    await Issue.findByIdAndUpdate(
      { _id: issue },
      { $unset: { column: id } }
    );
  })

  return Column.findByIdAndDelete(id);
}

module.exports = deleteColumn
