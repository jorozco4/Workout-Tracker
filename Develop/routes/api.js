const workout = require("../models/workout");
const express = require("express");
const router = express.Router("express");
const mongoose = require("mongoose");

router.post("/api/workouts", ({body}, res) => 
workout.creat({})
.then(dbWorkout) => {
    res.json(dbWorkout)
})
.catch(({message})) => {
    console.log(message);
    

    });
});

router.put("/api/workouts/:id", ({params, body}, res) =>
console.log("PARAMS", body, params);

module.exports = router;
