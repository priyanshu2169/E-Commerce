const express=require("express");
const mongoose=require("mongoose");
const Listing=require("./Models/model1.js");
const path=require("path");
const ejsMate=require("ejs-mate");
const methodOverride=require("method-override");
const app=express();
const port=8080;
app.listen(port,()=>{
    console.log(`server is listining at port ${port}`);
});
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));


//database
main().then((res)=>{
    console.log("connection to mongoDB is successful");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce');
}



//root
app.get("/",(req,res)=>{
    res.send('this is root page');
});

//home route
app.get("/home",async(req,res)=>{
    let listings=await Listing.find({});
    res.render("allPages/home.ejs",{listings});
});

//show route
app.get("/show/:id",async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    res.render("allPages/show.ejs",{listing});
});


//edit route
app.get("/edit/:id",async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    res.render("allPages/edit.ejs",{listing});
})




