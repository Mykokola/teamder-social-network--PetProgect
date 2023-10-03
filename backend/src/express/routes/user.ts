import registerUser from "../../api/usersAuth";
const express = require("express");
const router = express.Router();
const handlerError = require('../../middlewears/handlerError')
router.post('/register',registerUser)

router.use(handlerError)

module.exports = router