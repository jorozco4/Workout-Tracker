const express = require("express");
const path = rquire("path");

module.export = funciton (app) {
    app.get("/", (req,res)=> {
        res.sendFile(path.join(_dirname,"../public/index.html"));
    });

