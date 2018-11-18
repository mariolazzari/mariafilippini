// test router
const router = require("express").Router();

// get test route
router.get("/", (req, res) => {
  res.status(200).json({ test: "ok" });
});

module.exports = router;
