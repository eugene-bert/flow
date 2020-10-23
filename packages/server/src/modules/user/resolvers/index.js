const me = require('./me')
const login = require('./login')
const signup = require('./signup')
const updateMe = require('./updateMe');
const searchUserByEmail = require('./searchUserByEmail');
const searchUserById = require('./searchUserById');

const resolvers = {
  Query: {
    me,
    searchUserByEmail,
    searchUserById
  },
  Mutation: {
    login,
    signup,
    updateMe
  }
}

module.exports = resolvers
