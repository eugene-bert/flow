const Issue = require('../../../models/issue')

const createIssue = async (_, {
  title, assignee, description, labels
}, { user }) => {
  const userId = user._id.toString()

  const newIssue = new Issue({
    title,
    assignee,
    description,
    labels,
    createdBy: userId
  })

  await newIssue
    .populate('createdBy')
    .execPopulate()

  return newIssue.save()
}

module.exports = createIssue
