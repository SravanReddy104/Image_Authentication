const user = require("../models/registerModel")
exports.login = (req,res)=>{
    const details = req.body;
    const userFound = user.find(details,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
}