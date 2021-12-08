const { Thought, User } = require('../models');

const thoughtController = {

    getAllThought(req, res) {
        Thought.find({})
            .populate({
                path: "thoughts",
            })
            .sort({ _id: -1 })
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                res.status(400).json(err);
            });
    }

};
module.exports = thoughtController;