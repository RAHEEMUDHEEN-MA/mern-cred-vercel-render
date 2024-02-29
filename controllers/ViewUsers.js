const UserModel = require("../models/UserModel")

const ViewUsers=async (req,res)=>{
    try {
        const Users=await UserModel.find()
        res.status(200).send({users:Users});
    } catch (error) {
        console.log("error in fetching users",error)
        res.status(500).send("internal server error",error)
    }
}

module.exports=ViewUsers