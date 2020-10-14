const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  assignee: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  labels: {
    type: String,
    required: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  changed: {
    type: Date,
    default: Date.now
  }
})

const Issue = mongoose.model('Issue', issueSchema)

module.exports = Issue
