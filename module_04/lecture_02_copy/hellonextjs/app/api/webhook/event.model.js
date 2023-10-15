import mongoose from 'mongoose';

const eventsSchema = new mongoose.Schema({
    event: String,
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;