const mongoose = require('mongoose');
const {toJSON} = require('./plugins');

const reelSchema = mongoose.Schema({
    mediaSrc: {
        type: String,
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    caption: {
        type: String,
    }, 
});

reelSchema.plugin(toJSON);

const Reel = mongoose.model('Reel', reelSchema);

module.exports = Reel;