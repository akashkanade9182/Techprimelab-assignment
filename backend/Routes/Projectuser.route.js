const express = require("express")
const bcrypt = require('bcrypt');
const projectuserRouter = express.Router()
const ProjectUsermodel = require("../Models/Projectuser.model");




projectuserRouter.post("/login", async (req, res) => {


     const { email, password } = req.body;


     try {
const ProjectUsermodel = require("../Models/Projectuser.model");
        let preentuser= await ProjectUsermodel.find({email,password})
       if(preentuser.length>0) {
          res.status(200).send({
               Success: true,
               Message : "Valid User"
               }
               )
        }
        else{
          res.status(200).send({
               Success: false,
               Message : "Invalid User"
               })
        }

                   
     }
     catch (err) {
          console.log(err)
          res.status(200).send({
               Success: false,
               Message : "Invalid User"
               })
     }

})











module.exports = projectuserRouter