const router = require("express").Router();
const emojisController = require("../controllers/emojisController")
router.get("/",emojisController.get)
module.exports = router