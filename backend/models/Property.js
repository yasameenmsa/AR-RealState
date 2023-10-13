const mongoose = require("mongoose")

const PropertySchema = new mongoose.Schema({
    currentOwner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        default:"User"
    },
    title: {
        type: String,
        required: true,
        min: 6,
        default:"Properties"
    },
    type: {
        type: String,
        enum: ["All","beach", "mountain", "village"],
        required: true
    },
    desc: {
        type: String,
        required: true,
        min: 50,
        default:"Emirite Properties"
    },
    img: {
        type: [String],
        required: true,
        default:[]
    },
    price: {
        type: Number,
        required: true,
        default:99999999999
    },
    sqmeters: {
        type: Number,
        required: true,
        min: 15,
        default:16
    },
    continent: {
        type: String,
        required: true,
        default:"Emirite"
    },
    beds: {
        type: Number,
        required: true,
        min: 1
    },
    bookmarkedUsers: {
        type: [String],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model("Property", PropertySchema)