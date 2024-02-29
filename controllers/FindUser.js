const UserModel = require("../models/UserModel");

const FindUser = async (req, res) => {
  try {
    const  _id  = req.params.id;
    console.log(_id);
    const user = await UserModel.findById( _id );
    if (!user) {
      res.status(404).send("User not exist with the id :"+ _id);
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500);
    console.log("error in finding user", error);
  }
};

module.exports = FindUser; 
