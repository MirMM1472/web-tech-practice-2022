const router = require("express").Router();
const Controller = require("../controllers");

router.post("/add", Controller.Registration.addRegistration);
router.get("/:regno", Controller.Registration.getRegestrationsbyRegno);

module.exports = router;
