"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require("mongoose");
const envConstants_1 = require("../constants/envConstants");
const setupConection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res = yield mongoose.connect(`mongodb+srv://${envConstants_1.MONGO_DB_USER}:${envConstants_1.MONGO_DB_PASSWORD}@${envConstants_1.MONGO_DB_HOST}/${envConstants_1.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=AtlasApp`);
        console.log('Database connection successful');
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
});
module.exports = setupConection;
//# sourceMappingURL=mongoDBconection.js.map