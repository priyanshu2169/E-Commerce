const mongoose=require("mongoose");
const Listing=require("../../Models/model1.js");
const initData=require("./data.js");
main().then((res)=>{
    console.log("connection to mongoDB is successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce');
}

const initDB=async ()=>{
    await Listing.insertMany(initData.data)
    console.log("data is initialized");
}

initDB();
