const { ApolloError } = require('apollo-server-express')
const User = require('../../../models/user')

const updateMe = (_, args, { user }) => {
  try {
    const userId = user._id.toString()

    const newUser = User.findByIdAndUpdate({ _id: userId }, args, {new: true});

    return newUser
  } catch (error) {
    throw error
  }
}

module.exports = updateMe
