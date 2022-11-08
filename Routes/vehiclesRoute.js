const router = require("express").Router();
const vehiclesController = require("../controllers/vehiclesContoller")
router.get("/",vehiclesController.get)
module.exports = router