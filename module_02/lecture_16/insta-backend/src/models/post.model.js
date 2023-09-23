const mongoose = require('mongoose');
const {toJSON} = require('./plugins');

const postSchema = mongoose.Schema({
    imageSrc: {
        type: String,
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    place: {
        type: String,
    },
    caption: {
        type: String,
    }, 
    mentions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    time : {
        type : Date,
        default: Date.now
    }
});

postSchema.plugin(toJSON);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;