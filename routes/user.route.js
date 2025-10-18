const express = require("express");
const router = express.Router();
const User = require("../models/user.models");
const { body, validationResult } = require("express-validator");

router.get("/register", async (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  body("username").trim().isLength({ min: 4 });
  body("email").trim().isEmail();
  body("password").trim().isLength({ min: 6 });

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() ,
        message: "Validation failed"
    });
  };
  let { username, email, password } = req.body;
  let createuser = await User.create({
    username: username,
    email: email,
    password: password,
  });
  console.log(createuser);
  res.send("User registered successfully");

});

module.exports = router;
