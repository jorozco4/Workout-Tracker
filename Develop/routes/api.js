const workout = require("../models/workout");
const express = require("express");
const router = express.Router("express");
const mongoose = require("mongoose");
const Workout = require("../../models/workout");

router.post("/api/workouts", ({body}, res) => 
workout.create({body})
.then(dbWorkout) => {
    res.json(dbWorkout)
})
.catch(({message})) => {
    console.log(message);
    
};


router.put("/api/workouts/:id", ({body,params}, res) => {
    console.log(body)
    Workout.findByIdAndUpdate(params.id, { $push:{exercises:body}}, {new:true})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(({message})) => {
        console.log(message)
    };
});





module.exports = router;
