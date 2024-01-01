
// exports=getDate;

// function getDate(){

//     var today=new Date();
//     var option={
//         day:"numeric",
//         month:"long",
//         weekday:"long",
//     }
//     var curr=today.toLocaleDateString("en-US", option);

//     return curr;
// }

// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// // import date from "/Users/prayagthaker/Desktop/WEB-DEVELOPMENT/todo-v1/date.js";
// const app=express();
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));
// app.set('view engine', 'ejs');
// app.listen(3000, function(){
//     console.log("server is up and live");
// });
// mongoose.connect('mongodb://localhost:27017/todoDB');

// const itemSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         require:[true, 'pls enter the item']
//     }
// });
// const Item=mongoose.model('item', itemSchema); 


// var items=[];
// var workItems=[];


// app.get("/", function(req, res){
//     // let day=date();
//     res.render('list',{listTitle:"To-do List", updatedItems : items});
// });

// app.post("/", function(req, res){
//     var item=req.body.newItem;
//     let listType=req.body.list;
//     if(listType === 'Work'){
//         workItems.push(item);
//         res.redirect("/work");
//     }else{
//         items.push(item);
//         res.redirect("/");
//     }
// });

// app.get("/work", function(req,res){
//     res.render("list", {listTitle:"Work", updatedItems : workItems})
// });

// app.get("/about", function(req, res){
//     res.render("about");
// })
