var express = require("express");
var router = express.Router();
require("dotenv").config();
// Import mysql for node
var connection = require("../db/mysql");

router.get("/", async function (req, res) {
    /* Getting all the communites */ 
    // let sql = "CREATE DATABASE nodemysql";
    // connection.query(sql, (err) =>{
    //     if(err){
    //         throw err;
    //     }
    //     res.send("Database created");
    try {
        const conn = await connection.find({});
        res.send(conn);
    } catch (e) {
        res.status(500).send();
    }
    });

// router.get("/:name", async function (req, res) {
//     // Get specific community name
//     try {
//         const milk = await Milk.findOne(
//             { name: req.params.name },
//             async (err, data) => {
//                 if (!data) return;
//                 return data;
//             }
//         );
//         res.send(milk);
//     } catch (e) {
//         res.status(500).send();
//     }
// });

// router.post("/", async function (req, res) {
//     // Post a new community onto the sql database
//     const milk = new Milk(req.body);
//     try {
//         await milk.save();
//         res.status(201).send({ milk });
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

module.exports = router;
