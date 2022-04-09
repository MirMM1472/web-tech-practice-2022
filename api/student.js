const router = require("express").Router();
const controller = require("../controllers");

router.get("/:regno", controller.students.getStudentByRegno);

module.exports = router;
