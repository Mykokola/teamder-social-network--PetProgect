const authService = require('../../api/usersAuth');
const express = require("express");
const router = express.Router();
const { auth } = require('../../middlewears/auth');
const handlerError = require('../../middlewears/handlerError');
router.post('/register', authService.registerUser);
router.post('/login', authService.loginUser);
router.post('/logout', auth, authService.logoutUser);
router.patch('/update/like/plus', auth, authService.updateLike);
router.patch('/update/like/minus', auth, authService.updateLike);
router.use(handlerError);
module.exports = router;
//# sourceMappingURL=user.js.map