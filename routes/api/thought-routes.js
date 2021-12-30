const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    removeThought

} = require('../../controllers/thought-controller');

//create thought
router.route('/:userId').post(createThought);

//get all thoughts
router.route('/').get(getAllThoughts);

//remove a thought
router.route('/:userId/:thoughtId').delete(removeThought);

//Get Thought by Id
router.route('/:thoughtId').get(getThoughtById);



module.exports = router;