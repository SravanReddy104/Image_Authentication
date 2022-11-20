const user = require("../models/userModel");

exports.post = async (req,res)=>{
     const data = req.body.data;
      try {
        const response = await user.insertMany(data);
        console.log(response);
      } catch (err) {
        return res.status(400).send({ err: err });
      }
    
      return res.status(200).send({
        message: "got response from mongoDB", 
      });
    

}  