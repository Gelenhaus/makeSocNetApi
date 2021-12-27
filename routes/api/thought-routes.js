const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    removeThought

} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThoughts);

router.route('/:userId').post(createThought);
router.route('/:userId/:thoughtId').delete(removeThought);
router.route('/:userId').post(createThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

module.exports = router;