const userModel = require('../models/users.model');
const captainModel = require('../models/captain.model');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklisToken.model');



// token is found in 2 places - header and cookies
module.exports.authUser = async (req,res,next)=>{

    const authHeader = req.headers.authorization; // Use req.headers (plural)
    const token = authHeader ? authHeader.split(' ')[1] : req.cookies.token;
if(!token){
    res.status(401);
    res.json({message: 'Unauthorized'});
    return;

}
console.log('Token received in middleware:', token);

const isblackListed = await BlacklistToken.findOne({token : token});
console.log('Blacklist check result:', isblackListed);
if(isblackListed){
    res.status(401);
    res.json({message: 'Unauthorized blacklist'});
    return;
}


try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    if(!user){
        res.status(401);
        res.json({message: 'Unauthorized'});
        return;
    }
    req.user = user;
    next();
} catch (error) {
    res.status(401);
    res.json({ message: 'Internal Server Error' });
}


}


module.exports.authCaptain = async (req,res,next)=>{

    const authHeader = req.headers.authorization; // Use req.headers (plural)
    const token = authHeader ? authHeader.split(' ')[1] : req.cookies.token;
if(!token){
    res.status(401);
    res.json({message: 'Unauthorized'});
    return;

}
const isblackListed = await BlacklistToken.findOne({token : token});
if(isblackListed){
    res.status(401);
    res.json({message: 'Unauthorized'});
    return;
}
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if(!captain){
        res.status(401);
        res.json({message: 'Unauthorized'});
        return;
    }
    req.captain=captain;
    next(); // to forward the request to the next middleware
} catch (error) {
    res.status(401);
    res.json({ message: 'Internal Server Error' });
}


}