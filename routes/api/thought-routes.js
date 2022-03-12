const router = require('express').Router();

const { 
    getAllThoughts,
    addThought,
    getThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction } = require('../../controller/thought-controller');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getThought).post(addThought).put(updateThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/:id/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').patch(removeReaction);

module.exports = router;