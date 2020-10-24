const Issue = require('../../../models/issue')
const Column = require('../../../models/column')

const deleteIssue = async (_, args) => {
  const { columnId, issueId } = args;
  const column = await Column.findByIdAndUpdate(
    {_id: columnId},
    { $pull: { issues: issueId } }
    );

  return Issue.findByIdAndDelete(issueId);
}

module.exports = deleteIssue
