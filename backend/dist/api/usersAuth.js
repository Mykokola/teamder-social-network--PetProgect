"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require('../untils/createError');
const userService = require('../services/usersBasicService');
const ERROR_TYPES = require('../constants/errorTypes');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const { JWT_SECRET } = require('../constants/envConstants');
const jwt = require('jsonwebtoken');
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const dubliceteUser = (yield userService.getUserOption({ email }))[0];
        if (dubliceteUser) {
            const error = yield createError(ERROR_TYPES.CONFLICT, {
                message: 'user with this email address has been registered'
            });
            throw error;
        }
        const passwordHash = yield bcrypt.hash(password, 10);
        const avatarURL = yield gravatar.url(email, {}, true);
        const newUser = Object.assign(Object.assign({}, req.body), { password: passwordHash, avatarURL });
        console.log(newUser);
        let user = yield userService.regUser(newUser);
        res.status(200).json({
            data: user,
        });
    }
    catch (e) {
        next(e);
    }
});
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email } = req.body;
        const user = (yield userService.getUserOption({ email }))[0];
        if (!user) {
            const error = yield createError(ERROR_TYPES.NOT_FOUND, {
                message: 'user with this email not found'
            });
            throw error;
        }
        const hashedPassword = user.password;
        const isValid = yield bcrypt.compare(password, hashedPassword);
        if (!isValid) {
            const error = yield createError(ERROR_TYPES.UNAUTHORIZED, {
                message: 'wrong passport'
            });
            throw error;
        }
        const serializedUser = user;
        delete serializedUser.password;
        const token = jwt.sign({ sub: serializedUser._id, role: serializedUser.role }, JWT_SECRET, { expiresIn: 3600 });
        res.cookie("jwt", token, { secure: true });
        res.status(200).json({
            data: {
                token,
                serializedUser,
            },
        });
    }
    catch (e) {
        next(e);
    }
});
const logoutUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("jwt");
        return res.status(204).json();
    }
    catch (e) {
        next(e);
    }
});
const updateLike = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id, likes } = req.user[0];
        const { path } = req.route;
        let likesUpdate;
        (path === '/update/like/plus') ? likesUpdate = likes + 1 : likesUpdate = likes - 1;
        const user = yield userService.userUpdateById(_id, { likes: likesUpdate });
        res.status(204).json();
    }
    catch (e) {
        next(e);
    }
});
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    updateLike
};
//# sourceMappingURL=usersAuth.js.map