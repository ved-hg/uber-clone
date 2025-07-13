const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const userController = require('../controllers/user.controller');
const {userAuth, authUser} = require('../middlewares/auth.middleware');

router.post('/register', [
     body('email').isEmail().withMessage('Invalid email'),
     body('fullname.firstname').isLength({min:3}).withMessage('First-name must be of at least 3 letters'),
     body('password').isLength({min:6}).withMessage('Password must be of lenth 6'),
    ],
     userController.registerUser,

)


router.post('/login', [
     body('email').isEmail().withMessage('Invalid email'),
      body('password').isLength({min:6}).withMessage('Password must be of lenth 6'),
    ],
     userController.loginUser,

)

router.get('/profile',authUser, userController.getUserProfile,

)
router.get('/logout',authUser, userController.logoutuser,

)





module.exports = router;
// npm i express-validator