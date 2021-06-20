const express = require("express");
const path = require("path");

module.exports = funciton (app) {
    app.get("/", (req,res)=> {
        res.sendFile(path.join(_dirname,"../public/index.html"));
    });

    app.get("/exercise", (res, res)=>{
        res.sendFile(path.join(_dirname, "..//public/exercise.html"));
    });

    app.get("/stats", (req,res) => {
        res.sendFile(path.join(_dirname,"../public/stats.html"));

    });
};