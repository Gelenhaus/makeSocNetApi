const { Schema, model, Types } = require('mongoose');


const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/.+@.+\..+/, 'Must match an email address'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
        ],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});


// create the user model using the PizzaSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;