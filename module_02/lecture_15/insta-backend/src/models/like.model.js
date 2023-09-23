const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    emotion: {
        type: String,
        enum: ['like', 'dislike'],
    }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;