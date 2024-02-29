const mongoose=require("mongoose")

const Connection=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected successfully");

    } catch (error) {
        console.log("error in DB Connection ",error)
    }
}

module.exports=Connection 