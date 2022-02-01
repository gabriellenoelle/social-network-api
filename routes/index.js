const router = require("express").Router();
const apiRoutes = require("./api");
// html routes are excluded for now, as there will not be a front-end for this app (for now)
// const htmlRoutes = require("./html/html-routes");

router.use("/api", apiRoutes);
// router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
