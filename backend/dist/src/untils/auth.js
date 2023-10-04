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
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("../constants/envConstants");
const userService = require("../services/usersBasicService");
const { errorCreater } = require("../untils/createError");
const { UNAUTHORIZED } = require("../constants/errorTypes");
const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["jwt"];
    }
    return token;
};
const jwtStrategy = new Strategy({
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor,
    ]),
}, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = payload.sub;
        const user = yield userService.getUserOption({ _id });
        if (user) {
            return done(null, user);
        }
        else {
            const err = errorCreater(UNAUTHORIZED, {
                message: 'Unauthorized',
            });
            return done(err, null);
        }
    }
    catch (err) {
        return done(err, null);
    }
}));
passport.use(jwtStrategy);
module.exports = passport;
//# sourceMappingURL=auth.js.map