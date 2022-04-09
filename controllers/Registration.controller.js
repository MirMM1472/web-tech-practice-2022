const db = require("../models");
const Grade = require("../models/Grade");
const Registration = require("../models/Registration");

exports.addRegistration = (req, res) => {
  //console.log(req.body);

  let courseids = JSON.parse(req.body.courseids);

  let regs = [];

  for (courseid of courseids) {
    regs.push(
      new Registration({
        courseid: courseid,
        regno: req.body.regno,
        gradeid: null,
      })
    );
  }
  console.log(regs);

  db.Registration.insertMany(regs).then((regs) => {
    res.status(200).json(regs);
  });
};

exports.getRegestrationsbyRegno = (req, res) => {
  Promise.all([
    db.Registration.aggregate([
      { $match: { regno: "1712252" } },
      {
        $lookup: {
          from: "courses",
          localField: "courseid",
          foreignField: "courseid",
          as: "course",
        },
      },
      {
        $unwind: "$course",
      },
      {
        $lookup: {
          from: "grades",
          localField: "gradeid",
          foreignField: "gradeid",
          as: "grade",
        },
      },
      {
        $unwind: { path: "$grade", preserveNullAndEmptyArrays: true },
      },
    ]),
    db.Grade.find().sort({ gradeid: 1 }),
  ]).then(([regs, grades]) => {
    res.status(200).json({ regs, grades });
  });
};
