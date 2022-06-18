let router = require("express").Router();

router.use("/", require("./users"));
router.use("/", require("./blogs"));
router.use("/", require("./comments"));
// router.use("/", (req, res) => {
// 	res.send("API Home");
// });

module.exports = router;
