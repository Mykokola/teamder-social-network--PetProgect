const createError = (ERROR_TYPE:string,{message,data}: { message: string, data: string }):{
    type:string,
    message:string,
    data:string
} => {
    return {
        type:ERROR_TYPE,
        message,
        data
}
}
module.exports = createError