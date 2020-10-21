const mongoose = require("mongoose");

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: false,
  },
  dashboard: {
    type: String,
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

const Column = mongoose.model("Column", columnSchema);

module.exports = Column;
