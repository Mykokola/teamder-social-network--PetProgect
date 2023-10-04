"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = (0, express_1.default)();
const port = 3000;
const user = require('./express/routes/user');
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use('/auth', user);
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map