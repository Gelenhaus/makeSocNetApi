const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    removeThought,
    editThought,
    createReaction,
    deleteReaction

} = require('../../controllers/thought-controller');


//THOUGHT ROUTES
//create thought
router.route('/:userId').post(createThought);

//get all thoughts
router.route('/').get(getAllThoughts);

//remove a thought
router.route('/:userId/:thoughtId').delete(removeThought);

//Get Thought by Id
router.route('/:thoughtId').get(getThoughtById);

//Edit a thought
router.route('/:thoughtId').put(editThought);

//REACTION ROUTES
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/reactionId').delete(deleteReaction);




module.exports = router;