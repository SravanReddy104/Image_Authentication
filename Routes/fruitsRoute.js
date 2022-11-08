const router = require("express").Router();
const fruitsController = require("../controllers/fruitsController")
router.get("/",fruitsController.get)
module.exports = router