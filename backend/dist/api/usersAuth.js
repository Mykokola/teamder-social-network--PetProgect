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
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.getAllUser();
        res.status(200).json({
            users
        });
    }
    catch (e) {
        next(e);
    }
});
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.body) === null || _a === void 0 ? void 0 : _a._id;
        const objectIdRegex = /^[0-9a-fA-F]{24}$/;
        if (!objectIdRegex.test(id)) {
            const error = createError(ERROR_TYPES.CONFLICT, {
                message: '_id is not valid'
            });
            throw error;
        }
        const user = yield userService.getUserOption({ _id: id });
        if (!user.length) {
            const error = createError(ERROR_TYPES.NOT_FOUND, {
                message: 'user with this _id not a found'
            });
            throw error;
        }
        res.status(200).json({
            user
        });
    }
    catch (e) {
        next(e);
    }
});
const currentUser = (req, res, next) => {
    try {
        const user = req.user[0];
        res.status(200).json({
            user
        });
    }
    catch (e) {
        next(e);
    }
};
const addFriend = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const friendLogin = (_b = req.body) === null || _b === void 0 ? void 0 : _b.login;
        const { _id, friends } = req.user[0];
        const friend = yield (userService.getUserOption({ login: friendLogin }));
        const newFrined = JSON.parse(JSON.stringify(friend[0]));
        const dublicateFriend = friends.some(({ login }) => login === friendLogin);
        if (!friend) {
            const error = createError(ERROR_TYPES.NOT_FOUND, {
                message: 'user with this login not a found'
            });
            throw error;
        }
        if (dublicateFriend) {
            const error = createError(ERROR_TYPES.BAD_REQUEST, {
                message: 'this user is your friend list'
            });
            throw error;
        }
        delete newFrined.password;
        delete newFrined.friends;
        const addFriend = yield userService.userUpdateById(_id, { friends: [...friends, newFrined] });
        res.status(200).json({
            user: 'add successful'
        });
    }
    catch (e) {
        next(e);
    }
});
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const dubliceteUser = (yield userService.getUserOption({ email }))[0];
        if (dubliceteUser) {
            const error = createError(ERROR_TYPES.CONFLICT, {
                message: 'user with this email address has been registered'
            });
            throw error;
        }
        const passwordHash = yield bcrypt.hash(password, 10);
        const avatarURL = yield gravatar.url(email, {}, true);
        const newUser = Object.assign(Object.assign({}, req.body), { password: passwordHash, avatarURL });
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
            const error = createError(ERROR_TYPES.NOT_FOUND, {
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
        const token = jwt.sign({ sub: serializedUser._id }, JWT_SECRET, { expiresIn: 3600 });
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
        const { _id: idUserAuth } = req.user[0];
        const { _id, change } = req.body;
        if (!_id) {
            const error = yield createError(ERROR_TYPES.BAD_REQUEST, {
                message: 'body is unvalidt'
            });
            throw error;
        }
        const user = yield userService.getUserOption({ _id });
        if (!user.length) {
            const error = yield createError(ERROR_TYPES.NOT_FOUND, {
                message: 'user is not a found'
            });
            throw error;
        }
        const { likes, usersWhoLiked } = user[0];
        let likesUpdate;
        if (usersWhoLiked.includes(idUserAuth)) {
            likesUpdate = likes - 1;
            usersWhoLiked.splice(usersWhoLiked.indexOf(idUserAuth), 1);
        }
        else {
            likesUpdate = likes + 1;
            usersWhoLiked.push(idUserAuth);
        }
        if (change) {
            const updateLikeS = yield userService.userUpdateById(_id, { likes: likesUpdate });
            const updateLiseUsersArry = yield userService.userUpdateById(_id, { usersWhoLiked });
        }
        else {
            likesUpdate = likes;
        }
        res.status(200).json({
            likes: likesUpdate
        });
    }
    catch (e) {
        next(e);
    }
});
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    updateLike,
    getAllUsers,
    currentUser,
    addFriend,
    getUserById
};
//# sourceMappingURL=usersAuth.js.map