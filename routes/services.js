const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

router.route("/recipes").post((req, res) => serviceController.create(req, res));

router.route("/recipes").get((req, res) => serviceController.getAll(req, res));

router
  .route("/recipes/:id")
  .get((req, res) => serviceController.getSingle(req, res));

module.exports = router;
