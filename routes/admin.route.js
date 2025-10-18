const express = require("express");
const router = express.Router();
const Admin = require("../models/admin.model");
router.get("/create", async (req, res) => {
  res.send("admin");
});
router.post("/create", async (req, res) => {
  if (Admin.length > 0) {
    return res.status(500).res.send("user already exits");
  }
  let { username, email, password } = req.body;
  let createadmin = await Admin.create({
    username: username,
    email: email,
    password: password,
  });
  res.send(createadmin);
});
router.get("/login", async (req, res) => {
  res.send("User loged in ");
});
router.post("/login",async(req,res)=>{
  

});
module.exports = router;