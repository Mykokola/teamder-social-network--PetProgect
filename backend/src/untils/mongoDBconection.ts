const mongoose = require("mongoose");
import {MONGO_DB_HOST,MONGO_DB_DATABASE,MONGO_DB_PASSWORD,MONGO_DB_USER} from '../constants/envConstants'
const setupConection  = async () => {
    try{
      let res = await  mongoose.connect(`mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/${MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=AtlasApp`);
      console.log('Database connection successful')
}catch(e){
    console.log(e)
    process.exit(1)
}
}

export = setupConection