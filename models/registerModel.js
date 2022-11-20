const mongoose = require("mongoose")
const registerSchema = mongoose.Schema({
  name:String,
  id:[],

},
{timestamps:true}
)
module.exports = mongoose.model("register",registerSchema)