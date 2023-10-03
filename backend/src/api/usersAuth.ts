import { Request, Response, NextFunction } from 'express';
const {createError} = require('../untils/createError')
const userService  = require('../services/usersBasicService')
const ERROR_TYPES = require('../constants/errorTypes')
const registerUser = async (req:Request,res:Response,next:NextFunction) => {
    try{
    const {email} = req.body
    const dubliceteUser:{} = (await userService.getUserOption({email}))[0]
    if(dubliceteUser){
        const error = await createError(ERROR_TYPES.CONFLICT,{
            message:'user with this email address has been registered'
        })
        throw error
    }
    let user= await userService.regUser(req.body)
      res.status(200).json({
        data: user,
      });
    }catch(e){
        next(e)
    }
  }


  export = registerUser