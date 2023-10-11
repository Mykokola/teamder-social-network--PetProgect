const  authService = require('../../api/usersAuth')
const express = require("express");
const router = express.Router();
const {auth} = require('../../middlewears/auth')
const handlerError = require('../../middlewears/handlerError')
router.use(handlerError)
router.get('/users',authService.getAllUsers)
router.post('/register',authService.registerUser)
router.post('/login',authService.loginUser)
router.get('/current/user',auth,authService.currentUser)
router.post('/logout',auth,authService.logoutUser)
router.patch('/update/like/plus',auth,authService.updateLike)
router.patch('/update/like/minus',auth,authService.updateLike)

module.exports = router