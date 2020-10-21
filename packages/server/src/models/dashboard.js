const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: false,
  },
  columns: {
    type: Array,
    required: false,
  },
  issues: {
    type: Array,
    required: false,
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  changed: {
    type: Date,
    default: Date.now,
  },
});

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

module.exports = Dashboard;
