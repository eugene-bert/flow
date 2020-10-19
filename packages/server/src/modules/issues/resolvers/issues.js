const Issue = require('../../../models/issue')

const issues = async (_) => {
  const issues = await Issue
    .find()
    .populate('createdById')

  return issues
}

module.exports = issues
