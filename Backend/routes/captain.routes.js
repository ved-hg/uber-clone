const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const captainController = require('../controllers/captain.controller');
const {userAuth, authUser, authCaptain} = require('../middlewares/auth.middleware');


router.post('/registerCaptain', [
     body('email').isEmail().withMessage('Invalid email'),
     body('fullname.firstname').isLength({min:3}).withMessage('First-name must be of at least 3 letters'),
     body('password').isLength({min:6}).withMessage('Password must be of lenth 6'),
     body('vehicle.color').isLength({min:3}).withMessage('Color must be of at least 3 letters'),
     body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of at least 3 letters'),
     body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be greater than 0'),
     body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Invalid vehicle type'),
    ],
    captainController.registerCaptain,
   )

   router.post('/loginCaptain', [
        body('email').isEmail().withMessage('Invalid email'),
         body('password').isLength({min:6}).withMessage('Password must be of lenth 6'),
       ],
        captainController.loginCaptain,
   
   )
   router.get('/profile',authCaptain, captainController.getCaptainProfile)

router.get('/logout',authCaptain, captainController.logoutCaptain)











// use in app.js
module.exports = router;