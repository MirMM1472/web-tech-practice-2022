const mongoose = require("mongoose");
const db = require("./models");

// db.Course.find().then((course) => {
//   console.log(JSON.stringify(course, null, "\t"));
//   process.exit();
// });

// db.Course.distinct("semester").then((semester) => {
//   console.log(JSON.stringify(semester, null, "\t"));
//   process.exit();
// });

// db.Course.find({ semester: 1 }).then((semester) => {
//   console.log(JSON.stringify(semester, null, "\t"));
//   process.exit();
// });

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
]).then((res) => {
  console.log(JSON.stringify(res, null, "\t"));
  process.exit();
});
