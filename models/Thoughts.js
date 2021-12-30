const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const ReactionSchema = new Schema({

    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => newTypes.ObjectId()
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    }

});

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minLength: 1

    },
    username: {
        type: String,
        require: true,
        trim: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    reactions: [ReactionSchema]

},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }

);

ThoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;