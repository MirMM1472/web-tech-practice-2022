const db = require("../models");

exports.getStudentByRegno = (req, res) => {
  db.Student.find({ regno: req.params.regno }).then((Student) =>
    res.status(200).json(Student[0])
  );
};
