const Issue = require('../../../models/issue')

const createIssue = async (_, {
  title, assignee, description, labels, column
}, { user }) => {
  const userId = user._id.toString()

  const newIssue = new Issue({
    title,
    assignee,
    description,
    labels,
    column,
    createdBy: userId
  })

  await newIssue
    .populate('createdBy')
    .execPopulate()

  return newIssue.save()
}

module.exports = createIssue
