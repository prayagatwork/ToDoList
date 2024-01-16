import express from "express";
import bodyParser from "body-parser";
import mongoose, { connect } from "mongoose";
const port=process.env.PORT || 3000;

// import date from "/Users/prayagthaker/Desktop/WEB-DEVELOPMENT/todo-v1/date.js";
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.listen(port, function(){
    console.log("server is up and live");
});
// mongoose.connect('mongodb://localhost:27017/todoDB');
mongoose.connect('mongodb+srv://prayagatwork2:password54321@cluster0.dpynexw.mongodb.net/todoDB');  // if any chnage

const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'pls enter the item']
    }
});
const Item=mongoose.model('item', itemSchema); 
const default_item=new Item({
    name:'pls begin adding your data'
});
// default_item.save();

const listSchems=new mongoose.Schema({
    name:String,
    items:[itemSchema],
});
const List=mongoose.model('list', listSchems);


async function deleteItem(checkedItem){
    await Item.deleteOne({_id: checkedItem});
}


app.get("/", function(req, res){
    
    Item.find().then((foundItems)=>{
        // console.log(data);
        res.render('list',{listTitle:"Today", updatedItems : foundItems});
    });

});

app.post("/", function(req, res){
    const itemName=req.body.newItem;
    const listName=req.body.ist;

    const item=new Item({
        name:itemName,
    });
    item.save();
    res.redirect('/');
});

app.post("/delete", function(req,res){
    const checkedItem=req.body.checkbox;
    deleteItem(checkedItem);
    res.redirect("/");
});

app.get("/:customListName", function(req,res){
    const customListName=req.params.customListName;

    List.findOne({name:customListName}).then((foundList)=>{
        
        if(! foundList){
            // create a new list
            const list=new List({
                name: customListName,
                items:default_item,
            });
            list.save();
            res.redirect("/"+customListName);
        }else{
            // show an existing list
            res.render("list",{listTitle: foundList.name, updatedItems : foundList.items} )
        }
    });
    
})