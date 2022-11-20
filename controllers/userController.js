const user  = require("../models/registerModel")
exports.postData = (req,res)=>{
      const resp =  user.create(req.body,(err,data)=>{
            if(err){
                res.status(500).send(err)
            }
            else{
                res.status(200).send(data)
            }
        })
    

    
}