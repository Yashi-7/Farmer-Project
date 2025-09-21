const express = require('express');
const router= express.Router();
const { body, validationResult} = require('express-validator')
const userModel = require('../models/user.model')
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');


const SECRET = "my_super_secret";
router.get('/register', (req,res)=>{
  res.render('register')
})

router.post('/register',

  body('email').trim().isEmail().isLength({min:13}),
  body('password').trim().isLength({min: 5}),
   body('name').trim().isLength({min: 3}),
  async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
    return res.status(400).json({
      errors: errors.array(),
      message:"Invalid data"
    })
    }
  const { email,name,password} = req.body;

  const hashPass = await bcrypt.hash(password,10);

  const newUser = await  userModel.create({
    email,
    name,
    password: hashPass
  })
  // res.json(newUser)
  res.redirect('/index.html');
})

router.get('/login', (req,res)=>{
  res.render('login');
})

router.post('/login',
  body('name').trim().isLength({min:3}),
  body('password').trim().isLength({min:5}),
  async (req,res)=>{
   const errors = validationResult(req);

   if(!errors.isEmpty()){
    return res.status(404).json({
      error: errors.array(),
      message:'Invalid data'
    })
   }

   const {name,password} = req.body;

   const user = await userModel.findOne({
    name: name
   })
   if(!user){
    return res.status(404).json({
      message:"username or password is incoorect"
    })   
   }

   const isMatch = await bcrypt.compare(password, user.password)
   if(!isMatch){
    return res.status(404).json({
      message:"username or password is incoorect"
    })
   }

  const token = jwt.sign({
    userId: user._id,
    email:user.email,
    name:user.name
  },
  SECRET,

)
   res.cookie('token',token)
  //  res.send("Logged In")
res.redirect('/index.html');
})

module.exports = router;