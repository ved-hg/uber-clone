const userModel = require('../models/users.model');
const userService = require('../services/user.service')
const {validationResult}= require('express-validator')
const blacklistTokenModel = require('../models/blacklisToken.model');
const BlacklistToken = require('../models/blacklisToken.model');




// logic to register user
module.exports.registerUser =  async(req,res,next)=>{
 const errors = validationResult(req);
 if(!errors.isEmpty()){
    res.json({errors: errors.array()});
    return;
 }
 
 const {fullname, email, password}= req.body;
 const isUserAlready = await userModel.findOne({email});    
 if(isUserAlready){
     res.status(400);
     res.json({message: 'User already exists'});
     return;
 }
 const  hashedPassword = await userModel.hashPassword(password);
 const user = await userService.createUser({
   
        firstname :fullname.firstname,
        lastname:fullname.lastname,

   
    email,
    password: hashedPassword,

});
const token = user.generateAuthToken();
res.status(201);
res.json({token,user});

}
module.exports.loginUser =  async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       res.json({errors: errors.array()});
       return;
    }
   const {email, password} = req.body;

const user = await userModel.findOne({email}).select('+password');
 
if(!user){
    res.status(401);
    res.json({message: 'User not found'});
    return;}
   
   const isMatch = await user.comparePassword(password);
    if(!isMatch){
         res.status(401);
         res.json({message: 'Invalid email or password'});
         return;
    }
    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,user});





}


// middleware to check which user is logged in and show only his data
module.exports.getUserProfile =  async(req,res,next)=>{
 
    res.status(200).json(req.user);



}
module.exports.logoutuser =  async(req,res)=>{
    res.clearCookie('token'); // Clear the token cookie

    const authHeader = req.headers.authorization;
    const token = authHeader ? authHeader.split(' ')[1] : req.cookies.token;

    if (!token) {
        return res.status(400).json({ message: 'No token provided' });
    }
    console.log('Token received in middleware:', token);
    const isBlacklisted = await BlacklistToken.findOne({ token });
    if (isBlacklisted) {
        return res.status(400).json({ message: 'Token already blacklisted' });
    }
    
    await BlacklistToken.create({token});
    
    
    res.status(200).json({message: 'Logged out successfully'});

}
