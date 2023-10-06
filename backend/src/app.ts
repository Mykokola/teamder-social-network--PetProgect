import express from 'express';
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3001;
const user = require('./express/routes/user')
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));



app.use('/auth',user)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});