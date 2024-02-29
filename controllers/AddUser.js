const UserModel  = require("../models/UserModel")

 const AddUser=async(req,res)=>{
    const {name,phone,city}=req.body
try {
    const AddUser=await UserModel.create({name:name ,phone:phone ,city:city})
    res.status(201).send({"user added" :AddUser})

} catch (error) {
    console.log(error)
    res.status(500).send("internal server error",error)
}
} 

module.exports=AddUser
