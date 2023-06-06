const express = require("express")
const bcrypt = require('bcrypt');
const projectuserRouter = express.Router()
const ProjectUsermodel = require("../Models/Projectuser.model");




projectuserRouter.post("/singup", async (req, res) => {

     if ( !email || !password) {
          res.status(422).json({ error: "Please add all the fields" })
     }
     const { email, password } = req.body;


     try {
        
               bcrypt.hash(password, 4, async function (err, hash) {
                    const user = new InstaUsermodel({ email, password: hash})
                    await user.save();
                    res.status(200).send({})

               });
     }
     catch (err) {
          console.log(err)
          res.status(400).send("error in signup")
     }

})








//log in
instauserRouter.post("/login", async (req, res) => {
     const { email, password } = req.body;
     if (!email || !password) {
          return res.status(422).json({ error: "Please add email and password" })
     }
     const presentuser = await InstaUsermodel.find({ email });
     if (!presentuser[0]) {
       return  res.status(422).send("wrong email")
     }
     const hash_password = presentuser[0].password;
     const { name, userName, _id,followers,following } = presentuser[0]
     try {
          bcrypt.compare(password, hash_password, function (err, result) {
               if (result) {
                    const token = jwt.sign({ "userId": _id }, 'shh');
                    if (token) {
                         res.status(200).send({ "mess": "longin succefull", token: token, user: { email, name, userName, _id,followers,following } })
                    } else {
                         res.status(422).send("error in getting token")
                    }

               } else {
                    res.status(422).send("password or username is wrong")
               }
          })
     }
     catch {
          console.log(err);
          res.status(400).send("error in login")
     }
})

instauserRouter.get("/getusercard/:id", async (req, res) => {

     const Id = req.params.id;
     try {
          const puser = await InstaUsermodel.findById({ _id: Id })
          res.status(200).send(puser)
     }
     catch {
          res.status(400).send("error in getting usercard")
     }



})






/***************Middleware Request*******************/

instauserRouter.use(Authentication)
instauserRouter.get("/getsingleuser", async (req, res) => {
     const { user } = req.body;



     try {
          let puser = await InstaUsermodel.findById({ _id: user });
          if (puser) {
               res.status(200).send(puser)
          }
     }
     catch {
          res.status(401).send("error in getting single user")
     }
}
)

instauserRouter.patch("/follow", (req, res) => {
     const { user, followId } = req.body;
     try {
 InstaUsermodel.findByIdAndUpdate({_id:followId}, {
     $push: { followers: user }
 }, {
     new: true
 }).then(()=>{
     InstaUsermodel.findByIdAndUpdate({_id:user}, {
          $push: { following: followId }
      }, {
          new: true
      }).then((r)=>{
          res.status(200).send(r)
      }).catch((e)=>{
          res.status(400).send("error in follwing pushing")
      })
 }).catch((e)=>{
     res.status(400).send("error in follwer pushing")
 })


     }
     catch {

     }

})

instauserRouter.patch("/unfollow", (req, res) => {
     const { user, followId } = req.body;
     try {
 InstaUsermodel.findByIdAndUpdate({_id:followId}, {
     $pull: { followers:user }
 }, {
     new: true
 }).then(()=>{
     InstaUsermodel.findByIdAndUpdate({_id:user}, {
          $pull: { following: followId}
      }, {
          new: true
      }).then((r)=>{
          res.status(200).send(r)
      }).catch((e)=>{
          res.status(400).send("error in follwing removing")
      })
 }).catch((e)=>{
     res.status(400).send("error in follwer removing")
 })


     }
     catch {

     }

})


instauserRouter.patch("/likes", async(req, res) => {
     const { user} = req.body;
     try{
          let puser=await InstaUsermodel.findById({_id:user})
          InstaUsermodel.findByIdAndUpdate({_id:user},{li})
     }
     catch{

     }

})

module.exports = instauserRouter