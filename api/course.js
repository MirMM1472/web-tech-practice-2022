const router = require("express").Router();
const controller = require("../controllers");

router.get("/all", controller.course.getAllSemesters);
router.get("/:semno", controller.course.getSemesterCourses);

module.exports = router;
