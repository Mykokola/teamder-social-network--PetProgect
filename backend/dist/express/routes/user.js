"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authService = require('../../api/usersAuth');
const express = require("express");
require("../../untils/requestModuleUser"); // Імпортуємо розширення типів
const { validateLogin, validateReg } = require('../../middlewears/validators');
const router = express.Router();
const { auth } = require('../../middlewears/auth');
const handlerError = require('../../middlewears/handlerError');
router.get('/users', authService.getAllUsers);
router.post('/addFriend', auth, authService.addFriend);
router.post('/register', validateReg, authService.registerUser);
router.post('/login', validateLogin, authService.loginUser);
router.get('/current/user', auth, authService.currentUser);
router.post('/logout', auth, authService.logoutUser);
router.patch('/update/like', auth, authService.updateLike);
router.post('/getUserById', auth, authService.getUserById);
router.use(handlerError);
module.exports = router;
//# sourceMappingURL=user.js.map