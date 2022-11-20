const router = require("express").Router();
const dataController = require("../controllers/dataController")
router.get("/",dataController.getData)
module.exports = router