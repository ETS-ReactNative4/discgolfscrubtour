// server/index.js
const path = require("path");
const mariadb = require("mariadb");
const express = require("express");
const { response } = require("express");
const dbInfo = require("./dbInfo.json")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/get-announcements", (req,res) => {
    //create mysql connection
    console.log(dbInfo)
    mariadb.createConnection({
            host: dbInfo.host, 
            user: dbInfo.user,
            password: dbInfo.password,
            database: dbInfo.database
        })
        .then(conn => {
            conn.query("SELECT * FROM announcements;")
                .then(rows => {
                    var objs = [];
                    for (var i=0; i < rows.length; i++){
                        objs.push({
                            title: rows[i].title, 
                            date: rows[i].date,
                            message: rows[i].message
                        });
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

app.get("/get-events", (req,res) => {
    //create mysql connection
    mariadb.createConnection({
            host: dbInfo.host, 
            user: dbInfo.user,
            password: dbInfo.password,
            database: dbInfo.database
        })
        .then(conn => {
            conn.query("SELECT * FROM events;")
                .then(rows => {
                    var objs = [];
                    for (var i=0; i < rows.length; i++){
                        objs.push({
                            eventStart: rows[i].title, 
                            eventEnd: rows[i].date, 
                            eventName: rows[i].message, 
                            eventDescription: rows[i].eventDescription, 
                            eventLocation: rows[i].eventLocation
                        });
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

app.get("/get-players", (req,res) => {
    //create mysql connection
    mariadb.createConnection({
            host: dbInfo.host, 
            user: dbInfo.user,
            password: dbInfo.password,
            database: dbInfo.database
        })
        .then(conn => {
            conn.query("SELECT * FROM scrub_players ORDER BY scrub_tour_rank;")
                .then(rows => {
                    var objs = [];
                    for (var i=0; i < rows.length; i++){
                        objs.push({
                            rank: rows[i].scrub_tour_rank, 
                            name: rows[i].player_name, 
                            year_joined: rows[i].year_joined, 
                            woody: rows[i].woody, 
                            scrub_lord: rows[i].scrub_lord
                        });
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