const express = require("express");
const router = express.Router();

router.get('/login',async (req,res,next) => {
    try{
    
      res.status(200).json({
        message: "Verification email sent",
      });
    }catch(e){
        console.log(e)
    }
  })

module.exports = router