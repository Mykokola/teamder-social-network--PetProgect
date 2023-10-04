import { Request, Response, NextFunction } from 'express';
const createError = require('../untils/createError')
const userService  = require('../services/usersBasicService')
const ERROR_TYPES = require('../constants/errorTypes')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const {JWT_SECRET} = require('../constants/envConstants')
const jwt = require('jsonwebtoken')

const getAllUsers = async (req:Request,res:Response,next:NextFunction) => {
try{
    const users = await userService.getAllUser()
    res.status(200).json({
        data:users
    })
}catch(e){
    next(e)
}
}


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
    const avatarURL = await gravatar.url(email,{},true)
    const newUser = {...req.body,
        password:passwordHash,
        avatarURL
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
        const serializedUser = user;
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
const logoutUser = async (req:Request,res:Response,next:NextFunction) => {
    try{
        res.clearCookie("jwt");
        return res.status(204).json();
    }catch(e){
        next(e)
    }
}
const updateLike = async (req:any,res:Response,next:NextFunction) => {
    try{
        const {_id,likes}:{_id:string,likes:number} = req.user[0]
        const {path}:{path:string} = req.route
        let likesUpdate:number;
        (path === '/update/like/plus') ? likesUpdate = likes + 1 :likesUpdate = likes - 1
        const user = await userService.userUpdateById(_id,{likes:likesUpdate})
        res.status(204).json();
    }catch(e){
        next(e)
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    updateLike,
    getAllUsers
}