const express=require("express");
const router=express.Router();
const burgerFile=require("../models/burger");

router.get("/",function(req,res){
    burgerFile.selectAll(function(data){
        var hbsObject={
            burgers:data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/",function(req,res){
 burgerFile.insertOne(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(result){
    res.json({ id: result.insertId });
 })
});
 router.put("/:id",function(req,res){
     var condition="id= "+ req.params.id;
     console.log("condition ", condition);
     burgerFile.updateOne({
         devoured: req.body.devoured
     },condition,function(result){
         if(result.changedRows===0){
             return res.status(404).end();
         }else{
             res.status(200).end();
         }
     })

 })
module.exports=router;