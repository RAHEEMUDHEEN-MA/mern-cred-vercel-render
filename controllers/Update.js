const UserModel = require("../models/UserModel")

const Update=async(req,res)=>{
    const _id=req.params.id
    const {name ,phone,city}=req.body

    try {
            const updatedUser=await UserModel.findByIdAndUpdate(_id ,{name:name ,phone:phone ,city:city})
            res.status(200).send({updated:updatedUser})
    } catch (error) {
        console.log("error in updating user",error)
        res.status.send("internal server error",error)
    }
}

module.exports=Update