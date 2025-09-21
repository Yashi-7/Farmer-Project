const mongoose = require('mongoose');

const useSchema= new mongoose.Schema({
  name:{
    type: String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    minlength: [ 3, 'Must be 3 character long']
  },
    email:{
    type: String,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    minlength: [ 13, 'Must be 13 character long']
  },
   password:{
    type: String,
    required:true,
    trim:true,
    minlength: [ 5, 'Must be 3 character long']
   }
})

const user= mongoose.model('user', useSchema)

module.exports = user;