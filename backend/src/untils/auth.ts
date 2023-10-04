import { Request} from 'express';
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { JWT_SECRET } = require("../constants/envConstants");
 const userService = require("../services/usersBasicService");
const {errorCreater} = require("../untils/createError");
 const {UNAUTHORIZED} = require("../constants/errorTypes");

const cookieExtractor = function (req:Request) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};

const jwtStrategy = new Strategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor,
      ]),
    },
    async (payload, done) => {
      try {
        const _id = payload.sub
        const user = await userService.getUserOption({_id});
        if (user) {
          return done(null, user);
        } else {
          const err = errorCreater(UNAUTHORIZED, {
            message: 'Unauthorized',
          });
          return done(err, null);
        }
      } catch (err) {
        return done(err, null);
      }
    },
  );

passport.use(jwtStrategy);
module.exports = passport;