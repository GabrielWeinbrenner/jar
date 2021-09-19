var express = require("express");
var app = express();
var router = express.Router();
require("dotenv").config();
// Import mysql for node

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

router.get("/", async function (req, res) {
    /* Getting all the communites */ 
    // let sql = "CREATE DATABASE nodemysql";
    connection.query("SELECT * FROM information.communitites", (err,rows,fields) =>{
        if(!!err){
            console.log('Error int the query');
        }
        else{
            console.log('Success!\n');
            console.log(rows);
            // res.json(rows);
        }
    });
});

router.get("/:name", async function (req, res) {
    // Get specific community name
    // let name = req.params.name;
    // let sql = "SELECT * FROM communitites WHERE name = '" + name + "'";
    connection.query("SELECT * FROM information.communitites WHERE name=?",req.params.name,(err,rows,fields) =>{
        if(!!err){
            console.log('Error int the query');
        }
        else{
            console.log('Success!\n');
            // console.log(rows.name);
        }
    });
    // try {
    //     const milk = await Milk.findOne(
    //         { name: req.params.name },
    //         async (err, data) => {
    //             if (!data) return;
    //             return data;
    //         }
    //     );
    //     res.send(milk);
    // } catch (e) {
    //     res.status(500).send();
    // }
});

router.post("/:addcommunity", async function (req, res) {
    //id,fullname,money
    let sql = "INSERT INTO information.communitites (id, name, money) VALUES (3, 'SchoolGroup', 100000)";
    connection.query(sql, (err,result) =>{
        if(!!err){
            console.log('Error int the query');
        }
        else{
            console.log('Success!\n');
            console.log(result);
            // res.json(rows);
        }
    });
    // Post a new community onto the sql database
    // const milk = new Milk(req.body);
    // try {
    //     await milk.save();
    //     res.status(201).send({ milk });
    // } catch (e) {
    //     res.status(400).send(e);
    // }
});

module.exports = router;
