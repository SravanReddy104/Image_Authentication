const user = require("../models/userModel");

exports.getData = (req,res)=>{
    console.log("in get data");
     const data = user.find((err,data)=>{
        if(err){
            res.status(500).send(err)
            console.log(err)
        }
        else{
            res.status(200).send(data)
        }
     });
     
 
    
}