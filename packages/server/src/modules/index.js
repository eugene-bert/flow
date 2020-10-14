const { makeExecutableSchemaFromModules } = require('../utils/modules')

const auth = require('./auth')
const issues = require('./issues')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    issues
  ]
})
