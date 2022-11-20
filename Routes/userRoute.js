const router = require("express").Router()
const userController = require("../controllers/userController")
console.log("in userRoute")
router.post("/post",userController.postData)
module.exports = router;