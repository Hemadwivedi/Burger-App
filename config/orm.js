const connection=require("./connection");
function printQuestionMarks(num){
    var arr=[];
    for(var i=0;i<num;i++){

    }
}

const orm={
    selectAll:function(tableName,cb){
     var queryString=`SELECT * FROM ${tableName}`;
     connection.query(queryString,function(err,result){
         if(err) throw err;
         console.log(result);
         cb(result);
     });
    },
    insertOne:function(tableName,cols,vals,cb){
        var queryString="INSER INTO `${tableName}`";
        queryString+=" (";
        queryString+="cols.toString()";
        queryString+=")";
        queryString+="VALUES (";
        queryString+=printQuestionMarks(vals.length);
        queryString+=")";
        console.log(queryString);
        connection.query(queryString,vals,function(err,result){
            if(err) throw err;
            cb(result);
        })
    },
    

    updateOne:function(tableName,colVal,condition,cb){
        const queryString="UPDATE `${tableName}`";
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString,function(err,result){
     if(err) throw err;
     cb(result);
        })

    }
};
module.exports=orm;