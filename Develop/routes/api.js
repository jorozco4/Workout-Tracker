const workout = require("../models/workout");
const express = require("express");
const router = express.Router("express");
const mongoose = require("mongoose");
const Workout = require("../../models/workout");

router.post("/api/workouts", ({ body }, res) => {
  workout
    .create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body);
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(10)
    .then((dbWorkout) => {
      res.json(dwWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
