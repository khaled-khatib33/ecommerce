const express = require('express');
const app = express();
const env = require('dotenv');
const bodyparser = require('body-parser');
const authRouts = require('./routes/auth');
const adminRouts = require('./routes/admin/auth');


const mongoose = require('mongoose');
// enviroment
env.config();
app.use(bodyparser.urlencoded({extended: true}));
app.use('/api', authRouts);
app.use('/api', adminRouts);

mongoose
  .connect(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
  })

  .then(() => {
    console.log("DB connected.........");
  })
  .catch((err) => console.log("DB not connected :" + err));


app.get("/", (req, res, next) => {
  res.status(200).json({ message: "hallo from khaled" });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({ message: req.body });
});

app.listen(process.env.port, () => {
  console.log("server is running on port : " + process.env.port);
});

