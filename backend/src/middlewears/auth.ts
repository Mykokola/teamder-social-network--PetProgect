import { Request, Response, NextFunction } from 'express';
import { User } from '../../types';
const {errorCreater} = require("../untils/createError");
const passport = require('../untils/auth');
const auth = async (req:any,res:Response,next:NextFunction) => {
    passport.authenticate("jwt", { session: false }, (error:any, user:User) => {
      if (error) {
         next(error);
      }
      if (!user) {
        const error = errorCreater(ERROR_TYPES.UNAUTHORIZED, {
          message: "Not authorized",
        });
        next(error);
      }
          req.user = user;
          next()
    })(req,res,next);
};
module.exports = {auth};