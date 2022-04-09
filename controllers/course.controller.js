const db = require("../models");

exports.getAllSemesters = (req, res) => {
  db.Course.distinct("semester").then((semesters) =>
    res.status(200).json(semesters)
  );
};

exports.getSemesterCourses = (req, res) => {
  db.Course.find({ semester: req.params.semno })
    .sort({ courseid: 1 })
    .then((course) => res.status(200).json(course));
};
