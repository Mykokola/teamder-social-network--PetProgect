"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WebSocket = __importStar(require("ws"));
const http = __importStar(require("http"));
const webSocket_1 = require("./webSocket/webSocket");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = (0, express_1.default)();
const port = 3001;
const user = require('./express/routes/user');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use('/auth', user);
(0, webSocket_1.setupSoccetConection)(wss);
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map