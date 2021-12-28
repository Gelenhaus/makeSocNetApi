const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minLength: 1

    },
    username: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    }
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;