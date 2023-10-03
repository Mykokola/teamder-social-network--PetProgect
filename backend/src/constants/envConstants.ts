const dotenv = require('dotenv')
dotenv.config()
const {MONGO_DB_HOST,MONGO_DB_DATABASE,MONGO_DB_PASSWORD,MONGO_DB_USER,JWT_SECRET} = process.env


if(!JWT_SECRET){
    throw new Error('Please setup JWT_SECRET')
}
if(!MONGO_DB_HOST){
    throw new Error('Please setup MONGO_DB_HOST')
}
if(!MONGO_DB_DATABASE){
    throw new Error('Please setup MONGO_DB_DATABASE')
}

if(!MONGO_DB_PASSWORD){
    throw new Error('Please setup MONGO_DB_PASSWORD')
}

if(!MONGO_DB_USER){
    throw new Error('Please setup MONGO_DB_USER')
}
export {
    MONGO_DB_HOST,MONGO_DB_DATABASE,MONGO_DB_PASSWORD,MONGO_DB_USER,JWT_SECRET
}