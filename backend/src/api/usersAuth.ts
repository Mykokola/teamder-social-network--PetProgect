import { Request, Response, NextFunction } from 'express';
const {createError} = require('../untils/createError')
const userService  = require('../services/usersBasicService')
const ERROR_TYPES = require('../constants/errorTypes')
const bcrypt = require('bcrypt')
const registerUser = async (req:Request,res:Response,next:NextFunction) => {
    try{
    const {email,password} = req.body
    const dubliceteUser:{} = (await userService.getUserOption({email}))[0]
    if(dubliceteUser){
        const error = await createError(ERROR_TYPES.CONFLICT,{
            message:'user with this email address has been registered'
        })
        throw error
    }
    const passwordHash = await bcrypt.hash(password,10)

    const newUser = {...req.body,
        password:passwordHash
    }
    console.log(newUser)
    let user= await userService.regUser(newUser)
      res.status(200).json({
        data: user,
      });
    }catch(e){
        next(e)
    }
  }
const loginUser = async (req:Request,res:Response,next:NextFunction) => {
    try{



    }catch(e){
        next(e)
    }
}


  export = registerUser