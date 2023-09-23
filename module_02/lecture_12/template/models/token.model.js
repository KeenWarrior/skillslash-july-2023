const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["access", "refresh", "resetPassword", "verifyEmail"],
        required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    }, 
    expires: {
        type: Date,
        required: true,
    },
    blacklisted: {
        type: Boolean,
        default: false,
    }
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;