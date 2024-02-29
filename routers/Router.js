const express = require("express");
const  AddUser  = require("../controllers/AddUser");
const ViewUsers = require("../controllers/ViewUsers");
const FindUser = require("../controllers/FindUser");
const Delete = require("../controllers/Delete");
const Update = require("../controllers/Update");

const Router = express.Router();

Router.route("/add").post(AddUser);
Router.route("/users").get(ViewUsers);
Router.route("/user/:id").get(FindUser);
Router.route("/delete").delete(Delete);
Router.route("/update/:id").put(Update);

module.exports=Router