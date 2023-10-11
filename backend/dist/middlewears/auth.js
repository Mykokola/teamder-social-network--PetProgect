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
const ERROR_TYPES = require('../constants/errorTypes');
const createError = require("../untils/createError");
const passport = require('../untils/auth');
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    passport.authenticate("jwt", { session: false }, (error, user) => {
        if (error) {
            next(error);
        }
        if (!user) {
            const error = createError(ERROR_TYPES.UNAUTHORIZED, {
                message: "Not authorized",
            });
            next(error);
        }
        req.user = user;
        next();
    })(req, res, next);
});
module.exports = { auth };
//# sourceMappingURL=auth.js.map