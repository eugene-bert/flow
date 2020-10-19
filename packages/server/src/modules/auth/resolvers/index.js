const me = require('./me')
const login = require('./login')
const signup = require('./signup')
const updateMe = require('./updateMe');

const resolvers = {
  Query: {
    me
  },
  Mutation: {
    login,
    signup,
    updateMe
  }
}

module.exports = resolvers
