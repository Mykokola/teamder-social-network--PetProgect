import { Request, Response, NextFunction } from 'express';
import { User } from '../types/index';

const ERROR_TYPES = require('../constants/errorTypes')
const createError = require("../untils/createError");
const passport = require('../untils/auth');
const auth = async (req:Request,res:Response,next:NextFunction) => {
    passport.authenticate("jwt", { session: false }, (error:any, user:User) => {
      if (error) {
      return  next(error);
      }
      if (!user) {
        const error = createError(ERROR_TYPES.UNAUTHORIZED, {
          message: "Not authorized",
        });
     return   next(error);
      }
          req.user = user;
          next()
    })(req,res,next);
};
module.exports = {auth};