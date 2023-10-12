"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = exports.validateReg = void 0;
const createError = require('../untils/createError');
const { registerSchema, loginSchema } = require('../constants/registerSchema');
const ERROR_TYPES = require('../constants/errorTypes');
const validateReg = (req, res, next) => {
    try {
        const data = req.body;
        const resultValidate = registerSchema.validate(data);
        const loginValidate = loginSchema.validate(data);
        if (Object.keys(data).length >= 3 && resultValidate.error || Object.keys(data).length < 2 && loginValidate.error) {
            const error = createError(ERROR_TYPES.CONFLICT, {
                message: 'body register unvalid'
            });
            throw error;
        }
        next();
    }
    catch (e) {
        next(e);
    }
};
exports.validateReg = validateReg;
const validateLogin = (req, res, next) => {
    try {
        const data = req.body;
        const loginValidate = loginSchema.validate(data);
        if (loginValidate.error) {
            const error = createError(ERROR_TYPES.CONFLICT, {
                message: 'body login unvalid'
            });
            throw error;
        }
        next();
    }
    catch (e) {
        next(e);
    }
};
exports.validateLogin = validateLogin;
//# sourceMappingURL=validators.js.map