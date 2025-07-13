const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userschema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be 3 letters long"],
    },
    // throws error if not minlength
    lastname: {
      type: String,

      minlength: [3, "First name must be 3 letters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Email must be 5 letters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
// select false means when you get user details, it is not returned
  // required for live-tracking
  socketId:{
    type: String
  }
});


userschema.methods.generateAuthToken = function(){
const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
return token;
}

userschema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}
userschema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user',userschema)

module.exports = userModel;
// imported in controllers which will have code for controlling routes
