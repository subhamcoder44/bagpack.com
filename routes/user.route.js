const express = require("express");
const router = express.Router();
const User = require("../models/user.models");
// const { body, validationResult, cookie } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
// Helper to create JWTs. Uses process.env.JWT_SECRET when available, falls back to a local secret.
function generateToken(user){
  const secret = process.env.JWT_SECRET || 'dev-secret-please-change';
  // keep payload minimal
  const payload = { id: user._id, username: user.username };
  return jwt.sign(payload, secret, { expiresIn: '7d' });
}


router.get("/register", async (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  // body("username").trim().isLength({ min: 4 });
  // body("email").trim().isEmail();
  // body("password").trim().isLength({ min: 6 });

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res
  //     .status(400)
  //     .json({ errors: errors.array(), message: "Validation failed" });
  // }
  let { username, email, password } = req.body;
  // basic validation
  if (!username || !email || !password) {
    return res.status(400).send('username, email and password are required');
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createuser = await User.create({
      username: username,
      email: email,
      password: hash,
    });
    console.log('Created user', createuser._id);
    const token = generateToken(createuser);
    res.cookie('token', token, { httpOnly: true });
    return res.send('User registered successfully');
  } catch (error) {
    console.error(error);
    // handle duplicate email (mongoose code 11000)
    if (error.code === 11000) {
      return res.status(409).send('User with this email already exists');
    }
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
