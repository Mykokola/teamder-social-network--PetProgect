const createError = (ERROR_TYPE, { message, data }) => {
    return Promise.resolve({
        type: ERROR_TYPE,
        message,
        data
    });
};
module.exports = createError;
//# sourceMappingURL=createError.js.map