const express = require("express");
const app = express();
const env = require("dotenv");
 const bodyparser = require("body-parser");
const authRouts = require("./routes/auth");
const adminRouts = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const carttRoutes = require("./routes/cart");
const path = require('path');

const mongoose = require("mongoose");
// enviroment
env.config();

 app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.json());
app.use("/api", authRouts);
app.use('/public' , express.static(path.join(__dirname, 'uploads')));
app.use("/api", adminRouts);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", carttRoutes);


let colection = "PPJ";
let mlink = "mongodb+srv://Admin:123@cluster0.dwwx2.mongodb.net/" + colection;
// connect DB
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@khaledmongo.gdvmf.gcp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("DB connected.........");
  })
  .catch((err) => console.log("DB not connected :" + err));

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "hallo from khaled",
  });
});

app.post("/data", (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    message: req.body
  });
});




app.listen(process.env.Port, () => {
  console.log("server is running on port : " + process.env.port);
});
