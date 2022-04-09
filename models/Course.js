const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseid: Number,
  code: String,
  title: String,
  crhr: Number,
  semester: Number,
});

module.exports = mongoose.model("Course", courseSchema);
