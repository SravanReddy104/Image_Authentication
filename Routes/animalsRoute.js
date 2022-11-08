const router = require("express").Router();
const animalsController = require("../controllers/animalController")
router.get("/",animalsController.get)
module.exports = router