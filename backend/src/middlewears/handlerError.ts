import { Request, Response, NextFunction,ErrorRequestHandler} from 'express';

const ERROR_CODES = require('../constants/errorCodes')
const handlerError = (err:any,req:Request,res:Response,next:NextFunction) => {
    const status = ERROR_CODES[err.type] || 500;
    res.status(status);
    res.json({
        status,
        message:err.message,
        data:err.data 
    })
}
module.exports = handlerError