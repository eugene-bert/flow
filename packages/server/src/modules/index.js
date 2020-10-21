const { makeExecutableSchemaFromModules } = require("../utils/modules");

const user = require("./user");
const issue = require("./issue");
const column = require("./column");
const team = require("./team");
const dashboard = require("./dashboard");

module.exports = makeExecutableSchemaFromModules({
  modules: [user, issue, column, team, dashboard],
});
