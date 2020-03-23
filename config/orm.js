const connection = require("./connection");

function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString();
}


function objToSql(ob) {
    const arr = [];
    for (const key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function (tableName, cb) {
        var queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += cols.toString();
        queryString += ")";
        queryString += " VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ")";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },


    updateOne: function (tableName, colVal, condition, cb) {
        let queryString = `UPDATE ${tableName}`;
        queryString += " SET ";
        queryString += objToSql(colVal);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })

    }
};
module.exports = orm;