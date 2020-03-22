const orm=require("../config/orm");

var burger={
    selectAll:function(cb){
        orm.selectAll("burgers",function(result){
            cb(result);
        })
    },
    insertOne:function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(result){
            cb(result);
        })
    },
    updateOne:function(colval,condition,cb){
        orm.updateOne("burgers",colval,condition,function(result){
            cb(result);
        })
    }

}
module.exports=burger;