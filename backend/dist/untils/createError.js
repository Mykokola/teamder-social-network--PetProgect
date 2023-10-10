const createError = (ERROR_TYPE, { message, data }) => {
    return Promise.reject({
        type: ERROR_TYPE,
        message,
        data
    });
};
module.exports = createError;
//# sourceMappingURL=createError.js.map