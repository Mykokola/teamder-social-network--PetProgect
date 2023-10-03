import { Request, Response, NextFunction } from 'express';
const {createError} = require('../untils/createError')
const userService  = require('../services/usersBasicService')
const ERROR_TYPES = require('../constants/errorTypes')
const bcrypt = require('bcrypt')
const {JWT_SECRET} = require('../constants/envConstants')
const jwt = require('jsonwebtoken')
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
        const {password,email}:{password:string,email:string} = req.body
        const user = (await userService.getUserOption({email}))[0]
        if(!user){
            const error = await createError(ERROR_TYPES.NOT_FOUND,{
                message:'user with this email not found'
            })
            throw error
        }
        const hashedPassword:string = user.password
        const isValid:true|false = await bcrypt.compare(password, hashedPassword);
        if(!isValid){
            const error = await createError(ERROR_TYPES.UNAUTHORIZED,{
                message:'wrong passport'
            })
            throw error
        }
        const serializedUser = {...user};
        delete serializedUser.password;
        const token = jwt.sign(
          { sub: serializedUser._id, role: serializedUser.role },
          JWT_SECRET,
          { expiresIn: 3600 }
        );
        res.cookie("jwt", token, { secure: true });
        res.status(200).json({
            data: {
              token,
              serializedUser,
            },
          });
    }catch(e){
        next(e)
    }
}
export = registerUser