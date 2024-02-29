const mongoose=require("mongoose")

const UserSchema=mongoose.Schema(
    {
        name:{type:String},
        phone:{type:String},
        city:{type:String},
    }
)

 const UserModel=mongoose.model("Userz",UserSchema)

 module.exports= UserModel