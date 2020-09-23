const express = require("express");
const Router = express.Router();
const conn = require("../conn");

Router.get("/", (req,res)=>{
    conn.query("SELECT * from parks", (err,rows,fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });

});

module.exports = Router;