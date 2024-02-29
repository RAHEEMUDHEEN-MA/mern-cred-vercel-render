const express = require("express");
const Connection = require("./configs/Connection");
const bodyParser=require("body-parser");
const Router = require("./routers/Router");
const cors=require("cors")
require("dotenv").config();
const app = express();
Connection();
app.get('/', (req, res) => {
  res.send("its success buddy")
});
app.use(cors())
app.use(bodyParser.json()) 
app.use("/gain",Router)


const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running  on port ", port);
});
  