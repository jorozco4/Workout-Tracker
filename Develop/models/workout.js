const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Type of exercise is required",
      },
      name: {
        type: String,
        required: "Name of exervise is required",
      },
      duration: {
        type: "Number",
        required: "Duration is required",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", newSchema);

module.exports = Workout;
