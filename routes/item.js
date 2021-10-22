const express = require("express");
const router = express.Router();

bodyParser = require("body-parser").json();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ratechallenge"
});

//REST Api to getAllItem with review Data
router.get("/getAllItem", async (req, res) => {

    //My SQL Query
    con.query("SELECT i.id AS item_id, i.name, r.id AS rate_id,r.star,r.review FROM item  AS i LEFT JOIN rate AS r ON i.id = r.item_id WHERE i.active ='1'", function (err, result, fields) {
        if (err) {
            //Return Status to API 
            res.status(200).send({
                status: '404',
                data: {
                    "error": 'mysql query error at getAllItem',
                }
            });
            throw err
        };
        //Return Status to API 
        res.status(200).send({
            status: '200',
            data: {
                "result": result,
            }
        });
    });
})

module.exports = router;