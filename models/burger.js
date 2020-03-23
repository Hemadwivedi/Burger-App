const orm = require("../config/orm");

const burger = {

    selectAll: (cb) => {
        orm.selectAll("burgers", function (result) {
            cb(result);
        })
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, function (result) {
            cb(result);
        })
    },

    updateOne: (colval, condition, cb) => {
        orm.updateOne("burgers", colval, condition, function (result) {
            cb(result);
        })
    }

};

module.exports = burger;