const UserModel = require("../models/UserModel");

const Delete = async (req, res) => {
    const _id=req.body
  try {
    const deleteUser = await UserModel.deleteOne(_id);
    res.status(200).send({deleted:deleteUser})
  } catch (error) {
    console.log(error);
  }
};

module.exports=Delete