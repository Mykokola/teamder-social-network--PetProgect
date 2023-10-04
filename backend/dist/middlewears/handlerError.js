"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ERROR_CODES = require('../constants/errorCodes');
const handlerError = (err, req, res, next) => {
    const status = ERROR_CODES[err.type] || 500;
    res.status(status);
    res.json({
        status,
        message: err.message,
        data: err.data
    });
};
module.exports = handlerError;
//# sourceMappingURL=handlerError.js.map