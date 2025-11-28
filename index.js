const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8080;
app.listen(port,()=>{
    console.log(`server is listining at port ${port}`);
});



//database
main().then((res)=>{
    console.log("connection to mongoDB is successful");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce');
}



