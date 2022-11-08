const router = require("express").Router();
const electronicController = require("../controllers/electronicController")
router.get("/",electronicController.get)
module.exports = router