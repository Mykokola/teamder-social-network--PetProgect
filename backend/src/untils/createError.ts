const createError = (ERROR_TYPE:string,{message,data}: { message: string, data: string }):Promise<{
    type:string,
    message:string,
    data:string
}> => {
    return Promise.resolve({
        type:ERROR_TYPE,
        message,
        data
    })
}
module.exports = createError