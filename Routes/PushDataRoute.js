const router = require("express").Router();
const pushDataController = require("../controllers/PushDataController")
router.delete("/",pushDataController.post)
module.exports = router