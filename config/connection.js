//set up mysql connection
const mysql = require("mysql");

const connection = () => {
    if (process.env.JAWSDB_URL) {
        return mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        return mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DATABASE
        });
    }
};


//make connection
connection().connect(function (err) {
    if (err) {
        console.error(`error connecting: ${err.stack} with connection ULR ${process.env.JAWSDB_URL}`);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
