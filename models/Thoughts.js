const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280

    },
    writtenBy: {
        type: String
    },
    thoughtBody: {
        type: String
    },
    username: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => dateFormat(createdAt)
    }
});

const Thought = model('Thought', ThoughtsSchema);

module.exports = Thought;