// server/index.js
const path = require("path");
const mariadb = require("mariadb");
const express = require("express");
const { response } = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/get-announcements", (req,res) => {
    //create mysql connection
    mariadb.createConnection({
            host: "localhost", 
            user: "dgstApp",
            password: "dgstApp1#",
            database: "scrub_tour"
        })
        .then(conn => {
            conn.query("SELECT * FROM announcements;")
                .then(rows => {
                    var objs = [];
                    for (var i=0; i < rows.length; i++){
                        objs.push({date: rows[i].date, message: rows[i].message});
                    }
                    conn.end();
                    console.log(objs);
                    res.send(JSON.stringify(objs));
                })
                .catch(err => {
                    throw err;
                })
            })
        .catch(err => {
            throw err;
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})