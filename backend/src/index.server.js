const express = require ('express');
const app = express();
const env =require ('dotenv');
// 
env.config();


 app.get('/',(req,res,next)=>{
     res.status(200).json({message: 'hallo from khaled'})
 })
app.listen(process.env.port,()=>{
   console.log( 'server is running on port : '+ process.env.port); 
})