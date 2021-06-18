const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newSchema = new Schema({});

const Workout = mongoose.model("Workout", newSchema);

module.exports = Workout;
