const Issue = require('../../../models/issue')

const issues = async (_) => {
  const issues = await Issue
    .find()
    .populate('createdBy')

  return issues
}

module.exports = issues
