const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNumber : {
    type : String,
    required : true
  } ,
  name : {
    type : String,
    required : true
  },
  address : {
    type : String,
    required : true
  },
  pickupDate : {
    type : Date,
    required : true
  },
  pickupTime : {
    type : String,
    required : true
  }

});

module.exports = mongoose.model('User', userSchema);
