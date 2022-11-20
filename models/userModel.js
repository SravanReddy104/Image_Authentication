const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  id:String,
  url:String,
  name:String

},
{timestamps:true}
)
module.exports = mongoose.model("satya_sai_dinesh",userSchema)