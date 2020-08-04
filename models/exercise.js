const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter the name of the exercise"
    },
    duration: {
        type: Number,
        required: "Please enter the duration"
    },
    weight: {
        type: Number,
        required: "Please enter a number(if no weigts used, enter '0'"
    },
    reps: {
        type: Number,
        required: "Please enter amount of reps"
    },
    sets: {
        type: Number,
        required: "Please enter amount of sets"
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise