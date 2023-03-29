const mongoose = require("mongoose");
// const validator = require("validator");

// schema create

const menSchema = new mongoose.Schema({
    ranking: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true,

    },
    dob: {
        type: Date,
        required: true,

    },
    country: {
        type: String,
        required: true,


    },
    score: {
        type: Number,
        required: true,

    },
    event: {
        type: String,
        default: "100m"
    }
});
const MensRanking = new mongoose.model('MensRanking', menSchema);

module.exports = MensRanking;