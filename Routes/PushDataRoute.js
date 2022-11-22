const router = require("express").Router();
const pushDataController = require("../controllers/PushDataController")
router.post("/",pushDataController.post)
module.exports = router